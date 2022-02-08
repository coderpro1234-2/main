#!/usr/bin/env python
import pygame
from pygame.locals import *
from pygame import mixer
pygame.init()
pygame.display.set_caption('Nyan Cat!')
Icon = pygame.image.load('/home/pi/code/python/pygame/nyancat/Icon.png')
pygame.display.set_icon(Icon)
width = pygame.display.Info().current_w
height = pygame.display.Info().current_h
screen = pygame.display.set_mode((width, height))
keys = pygame.key.get_pressed()
def showimg(image, width1, height1, ox, oy):
    difference = pygame.image.load(image)
    difference = pygame.transform.scale(difference, (width1, height1))
    screen.blit(difference, (ox, oy))
    pygame.display.update()
def playsound(music, volume):
    mixer.init()
    mixer.music.load(music)
    mixer.music.set_volume(volume)
    mixer.music.play()
showimg('/home/pi/code/python/pygame/nyancat/nyancat.jpg', width, height, 0, 0)
playsound('/home/pi/code/python/pygame/nyancat/nyancat.mp3', 1.0)
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
pygame.quit()
exit()