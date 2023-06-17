## Тестовое задание клиентская часть
#### Чтобы запустить проект, выполните следующие шаги:
1. Установите Docker на свой компьютер, если еще не установлен.
2. Склонируйте репозиторий
	```
   git clone https://github.com/basya01/dZENcode_test_client.git
   ```
3. Откройте терминал или командную строку и перейдите в корневую директорию вашего проекта.
4. Соберите Docker-образ, используя команду:
	 ```
	docker build -t <name-of-image> .
   ```
5. Дождитесь завершения сборки образа.
6. Запустите Docker-контейнер на порту 8080 помощью команды:
   ```
   docker run -it -p 8080:8080 <name-of-image>
   ```
7. Откройте браузер и перейдите по адресу http://localhost:8080, чтобы увидеть запущенное приложение.

Чтобы запустить приложение без использования докера просто используйте эту команду после клонирования репозитория:
``
docker build -t <name-of-image>
``
