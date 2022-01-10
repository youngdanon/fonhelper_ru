# fonhelper_ru

## Commands:
### `Build React`
```
cd mainapp-ui && npm run build && cd .. && python manage.py collectstatic
```
### `Start Redis broker via Docker`
```
sudo docker-compose up
```
### `Start Celery beat`
```
celery -A fonbet_helper_v2 beat
```
### `Start Celery worker`
```
celery -A fonbet_helper_v2 worker -l INFO --pool=solo
```