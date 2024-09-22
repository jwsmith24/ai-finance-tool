FROM python:3.10-slim

# Set working directory inside the container
WORKDIR /app

#Copy current dir contents into the container
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Run main.py when container starts
CMD ["python", "main.py"]
