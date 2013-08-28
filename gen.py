#!/usr/bin/python
# coding: utf-8
import random, string

eike_corp = ''.join(random.choice(string.uppercase) for i in range(2)) + 'X'

print "Eike's next corp name is %s " % eike_corp

