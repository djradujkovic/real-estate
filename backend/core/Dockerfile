FROM python:3.9.9-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /backend

RUN apk add postgresql-dev gcc python3-dev musl-dev jpeg-dev zlib-dev mysql-dev

COPY requiremets.txt .

RUN pip3 install -r requiremets.txt

COPY . .