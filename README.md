OpenIoT

IoT Cloud infrastructure based on Docker stack (Docker, Docker-Compose, Docker Swarm) designed to facilitate the integration of objects into apps. Makers should now have a simple tool and lots of guidelines to cover the technical space between the sensor and (UI) functionality.

v0.0.1

License: Apache License 2.0

Visit https://openiot.network/ for further references.

CircleCI

Join the chat at https://gitter.im/OpenIoTAcademy

Intro
IoT Cloud infrastructure represents the Software Layer of the OpenIoT community, along with the :
Infrastructure Layer - the Open LoRaWan network deployed currently in the area of Vienna and part of the global Open initiative TheThingsNetwork
Community Layer - a group of passionate people in love with innovation and personal IoT practicants - eager to bring the power of IoT in their life.

The purpose of the Software Layer is to fill-in the technical gaps for any Maker by providing him with the necessary tools, examples and infrastructure. A Maker should just MAKE with less friction as possible. 

The most outstanding features are:

it is built with one purpose in mind - build IoT Apps, therefore design, tools and architecure are all IoT centric
it guides any user, hands-on, from the sensor to UI functionality
it is highly extensible as at the core it is based on NodeRed Open-Source IoT tool currently extended with hundreds of nodes,
very flexible as the whole workflow is based on scripting (NodeRed > NodeJS < JS )
very scalable as the whole deployment is based on Docker stack 
very robust as it comes with a series of JAVA micro-services dealing with Persistence through connection pools(RabbitMQ, MongoDB, MySql, Redis) 


Technical stack: <IoT-REST-oriented architecture>

Docker stack (Docker, Docker-Compose, Docker-Swarm)
CLOUD(AWS, AZURE, GCP)
IOT UI (Freeboard, Geckoboard)
AMQP (RabbitMQ)
REDIS
Nodered
RaspberryPI (Raspbian, NOOBS, etc )
Ruby
NoSQLDB(mongodb)
Java 8 (functional programming)
Spring Boot 
Spring Framework (Spring security; Spring MVC;Spring MVC RESTful; JDBC; JPA; JMS)
Gradle

Prerequirements
Docker

Running
Go to the root directory and execute

(For Linux)
docker-compose up

(For Windows)
docker-compose -f docker-compose.yml -f docker-compose.override.win.yml up
