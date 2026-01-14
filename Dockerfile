FROM ubuntu
RUN apt-get update
RUN apt-get install -y python3 apache2 python3-venv python3-pip libapache2-mod-wsgi-py3
RUN a2enmod wsgi
WORKDIR /usr/app
RUN python3 -m venv /usr/app/venv
ENV PATH="/usr/app/venv/bin:$PATH"
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
EXPOSE 80
RUN echo "ServerName localhost" | tee /etc/apache2/conf-available/fqdn.conf
RUN a2enconf fqdn
CMD apachectl -D FOREGROUND
