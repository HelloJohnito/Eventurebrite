# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## events
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
description   | text      | not null
author_id     | integer   | not null, foreign key (reference: users), indexed
price         | integer   | not null
date          | date      | not null
location      | string    | not null
images        | string    |
category-tag  | string    | not null

## tickets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references: user), indexed
event_id    | integer   | not null, foreign key (references: event), indexed

## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references: user), indexed
event_id    | integer   | not null, foreign key (references: event), indexed
