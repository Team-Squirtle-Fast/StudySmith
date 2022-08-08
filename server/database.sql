CREATE TYPE "status" AS ENUM (
  'red',
  'yellow',
  'green'
);

CREATE TABLE "users" (
  "user_id" serial PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "hash_password" varchar NOT NULL
);

CREATE TABLE "tasks" (
  "task_id" serial PRIMARY KEY,
  "task_title" varchar NOT NULL,
  "due_date" date NOT NULL,
  "resource_id" [fk],
  "user_id" [fk]
);

CREATE TABLE "resources" (
  "resource_id" serial PRIMARY KEY,
  "resource_title" varchar NOT NULL,
  "resource_description" varchar,
  "user_id" [fk]
);

CREATE TABLE "skills" (
  "skill_id" serial PRIMARY KEY,
  "skill_name" varchar NOT NULL,
  "skill_status" status DEFAULT 'red',
  "skill_notes" varchar,
  "user_id" [fk]
);

CREATE TABLE "log" (
  "log_id" serial PRIMARY KEY,
  "log_title" varchar NOT NULL,
  "log_body" varchar,
  "log_date" date DEFAULT (now()),
  "user_id" [fk]
);

CREATE TABLE "tag" (
  "tag_id" serial PRIMARY KEY,
  "tag_title" varchar UNIQUE NOT NULL
);

CREATE TABLE "join_resources_tags" (
  "tag_id" [fk],
  "resource_id" [fk]
);

ALTER TABLE "tasks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "resources" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("resource_id") REFERENCES "resources" ("resource_id");

ALTER TABLE "skills" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "log" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "join_resources_tags" ADD FOREIGN KEY ("resource_id") REFERENCES "tag" ("tag_id");

ALTER TABLE "join_resources_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "resources" ("resource_id");
