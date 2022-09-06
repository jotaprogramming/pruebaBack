CREATE KEYSPACE IF NOT EXISTS blogts WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': '1'
};
CREATE TABLE blogts.users (
    user_id UUID PRIMARY KEY,
    user_name TEXT,
    password TEXT,
    bio TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    delete_at TIMESTAMP
);
CREATE TABLE blogts.comments (
    comment_id UUID PRIMARY KEY,
    body TEXT,
    id_user UUID,
    id_article UUID,
    created_at TIMESTAMP,
    delete_at TIMESTAMP,
);
CREATE TABLE blogts.articles (
    articles_id UUID PRIMARY KEY,
    title TEXT,
    description TEXT,
    id_user UUID,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    delete_at TIMESTAMP,
);
CREATE TABLE blogts.blocked_users (
    blocked_user_id UUID PRIMARY KEY,
    id_user UUID,
    id_article UUID,
);