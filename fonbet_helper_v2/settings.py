from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-h2l61@6229n(g#n$8iod3juncn6+nc^2=*u49uh@7&c=ex^y)k'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['192.168.0.113', 'fonhelper.ru']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'mainapp',
    'rest_framework',
    'django_celery_beat',
    'django_celery_results',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'fonbet_helper_v2.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'mainapp-ui/build'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'fonbet_helper_v2.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {

    'default': {

        'ENGINE': 'django.db.backends.postgresql',

        'NAME': 'fonbet_helper_v2',

        'USER': 'youngdanon',

        'PASSWORD': 'Danil4693',

        'HOST': 'localhost',

        'PORT': '5432',

    }

}

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'ru'

TIME_ZONE = "Europe/Moscow"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/backend-static/'
STATIC_ROOT = BASE_DIR / 'static'
STATICFILES_DIRS = (
    (BASE_DIR / 'mainapp-ui/build/static'),
)

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

FONBET_SESSION_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    'Accept-Language': 'ru-RU'
}

FACTOR_NAMES = (
    (921, "Победа 1"),
    (3150, "Победа 1"),
    (3144, "Победа 1"),
    (922, "Ничья"),
    (3152, "Ничья"),
    (923, "Победа 2"),
    (3151, "Победа 2"),
    (3145, "Победа 2"),
    (924, "1X"),
    (1571, "Не ничья"),
    (925, "2X"),
    (927, "Фора 1"),
    (937, "Фора 1"),
    (1845, "Фора 1"),
    (928, "Фора 2"),
    (938, "Фора 2"),
    (1846, "Фора 2"),
    (930, "Тотал Б"),
    (940, "Тотал Б"),
    (1848, "Тотал Б"),
    (1696, "Тотал Б"),
    (1727, "Тотал Б"),
    (931, "Тотал М"),
    (941, "Тотал М"),
    (1849, "Тотал М"),
    (1697, "Тотал М"),
    (1728, "Тотал М"),
    (1809, "Инд.Тотал-1 Б"),)

CELERY_TIMEZONE = "Europe/Moscow"
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_TIME_LIMIT = 30 * 60
CELERY_BROKER_URL = f'redis://localhost:6379/0'
print(CELERY_BROKER_URL)
