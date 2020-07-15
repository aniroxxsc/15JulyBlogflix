FROM python:3.6

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
RUN mkdir /blogflix

# Set the working directory to /music_service
WORKDIR /blogflix

# Copy the current directory contents into the container at /music_service
ADD . /blogflix/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]