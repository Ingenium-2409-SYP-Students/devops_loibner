FROM maven:3.9.14-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml ./
RUN mvn -B dependency:go-offline

COPY src ./src
RUN mvn -B -DskipTests package

FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY target/*.jar backend.jar
ENTRYPOINT ["java","-jar","backend.jar"]