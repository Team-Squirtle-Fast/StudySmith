CREATE TYPE "status" AS ENUM (
  'red',
  'yellow',
  'green'
);

CREATE TABLE "Users" (
  "user_id" serial PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "hash_password" varchar NOT NULL
);

CREATE TABLE "Tasks" (
  "task_id" serial PRIMARY KEY,
  "task_title" varchar NOT NULL,
  "due_date" date NOT NULL,
  "resource_id" ,
  "user_id" ,
  UNIQUE ("tasks_title", "user_id")
);

CREATE TABLE "Resources" (
  "resource_id" serial PRIMARY KEY,
  "resource_title" varchar NOT NULL,
  "resource_description" varchar,
  "user_id",
  UNIQUE ("resource_title", "user_id")
);

CREATE TABLE "Skills" (
  "skill_id" serial PRIMARY KEY,
  "skill_name" varchar NOT NULL,
  "skill_status" status DEFAULT 'red',
  "skill_notes" varchar,
  "user_id" ,
  UNIQUE ("skill_name", "user_id") 
);

CREATE TABLE "Log" (
  "log_id" serial PRIMARY KEY,
  "log_title" varchar NOT NULL,
  "log_body" varchar,
  "log_date" date DEFAULT (now()),
  "user_id" 
);

CREATE TABLE "Tag" (
  "tag_id" serial PRIMARY KEY,
  "tag_title" varchar UNIQUE NOT NULL
);

CREATE TABLE "Join_Resources_Tags" (
  "tag_id" ,
  "resource_id" 
);

ALTER TABLE "Tasks" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Resources" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Tasks" ADD FOREIGN KEY ("resource_id") REFERENCES "Resources" ("resource_id");

ALTER TABLE "Skills" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Log" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Join_Resources_Tags" ADD FOREIGN KEY ("resource_id") REFERENCES "Tag" ("tag_id");

ALTER TABLE "Join_Resources_Tags" ADD FOREIGN KEY ("tag_id") REFERENCES "Resources" ("resource_id");
