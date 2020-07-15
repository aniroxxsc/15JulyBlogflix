
from celery import shared_task
import base64
import re
from .models import Post
from django.core.files.base import ContentFile
import uuid
from django.shortcuts import get_object_or_404
import os
from django.core.files import File

import datetime
from datetime import datetime, date, timedelta
from pytz import timezone
from authapp.models import Subscribe
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import BadHeaderError, send_mail


@shared_task
def send_notifiction():
    #html = []
    tz1 = timezone('utc')
    dt1 = datetime.now(tz=tz1)
    start_of_week = dt1+timedelta(days=0-dt1.weekday())
    end_of_week = dt1+timedelta(days=6-dt1.weekday())
    if dt1.weekday() ==0:
        html = render_to_string('empty.html',)
        for blogg in Post.objects.all():
            if blogg.CreateTime >=start_of_week:
                html1 = render_to_string('mail2.html',{'blogtitle': blogg.title, 'blogdescription': blogg.description})
                html += html1
        subject = 'Subject'
        print(type(html),"html ka type    \n",html)
        html_message = render_to_string('mail.html', {'paragraph': html})
        plain_message = strip_tags(html_message)
        from_email = 'aniroxxtheworld@gmail.com'
        to = 'anirudh.singh.chauhan45@gmail.com'
        for users in Subscribe.objects.all():
            email_id = users.email
            send_mail(subject, plain_message, from_email, [email_id], html_message=html_message)
    else:
        print("false")




# @shared_task
# def ConvertToImg(content,post_id):
#     img_data=re.findall("(?<=base64,)[^>]+>",content)
#     extensions=re.findall("png|jpeg|jpg",content)
#     if len(img_data) !=0:
#         img=img_data[0]
#         data=img[:-2]
#         newpost = Images()
#         image_data = base64.b64decode(data)
#         image_name = str(uuid.uuid4())+extensions[0]
#         newpost.image = ContentFile(image_data, image_name)
#         post = get_object_or_404(Post, slug=post_id)
#         newpost.post= post
#         newpost.save()
#     else:
#         newpost = Images()
#         post = get_object_or_404(Post, slug=post_id)
#         newpost.post= post
#         newpost.save()

@shared_task
def ConvertToImg(content,post_id):
    img_data=re.findall("(?<=base64,)[^>]+>",content)
    extensions=re.findall("png|jpeg|jpg",content)
    if len(img_data)!=0:
        img=img_data[0]
        data=img[:-2]
        data += '=' * (-len(data) % 4)
        post = get_object_or_404(Post, slug=post_id)
        image_data = base64.urlsafe_b64decode(data)
        image_name = str(uuid.uuid4())+"."+extensions[0]
        post.thumbnail = ContentFile(image_data, image_name)
        post.save()


