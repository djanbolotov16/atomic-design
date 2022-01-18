You can visit deployed verison of this project with this link: https://djanbolotov16.github.io/atomic-design/

# Правила

1) Использовать архитектуру Atomic Design
2) Если компонент можно разбить на мелкие компоненты, то маленькие компоненты мы добавляем в папку Atoms, а сам компонент в папку Molecules
3) Использовать только SASS
4) Для использования каких либо величин - перевести все в REM (основная величина измерения REM) Для перевода пикселей в ремы есть подготовленная функция rem
5) Макет сайта разделен на сетку состоящую из квадратиков 5x5 пикселей, на основе этого выведенны 2 основные переменные subline (5пикселей) и baseline (25пикселей)

6) Есть ряд заготовленных функций и миксинов, которые позволяют следовать поставленной дизайн системе и упращают разработку
7) Стек технологий, необходимый для успешного выполнения тестового задания:
    - React
    - Typescript
    - SASS
