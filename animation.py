import pygame
import random

pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
hearts = [(random.randint(0, WIDTH), random.randint(0, HEIGHT)) for _ in range(20)]

def draw_hearts():
    screen.fill((255, 182, 193))
    for x, y in hearts:
        pygame.draw.circle(screen, (255, 0, 0), (x, y), 10)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    draw_hearts()
    pygame.display.flip()
    clock.tick(30)

pygame.quit()
