/* Course content. Each text is [ru, uz]. Add more courses/lessons here. */
const COURSES = [
  { id: "py", cat: "prog", level: 1, t: ["Python для начинающих", "Python boshlovchilar uchun"],
    d: ["Основы языка: вывод, переменные, условия.", "Til asoslari: chiqarish, o‘zgaruvchilar, shartlar."],
    lessons: [
      { t: ["Вывод на экран", "Ekranga chiqarish"], b: ["Функция print() выводит текст: print(\"Привет\").", "print() funksiyasi matn chiqaradi: print(\"Salom\")."],
        q: { q: ["Что выводит print(2 + 3)?", "print(2 + 3) nimani chiqaradi?"], o: ["23", "5", "2 + 3"], a: 1 } },
      { t: ["Переменные", "O‘zgaruvchilar"], b: ["Переменная хранит значение: x = 10.", "O‘zgaruvchi qiymatni saqlaydi: x = 10."],
        q: { q: ["Что хранит x после x = 4; x = x + 1?", "x = 4; x = x + 1 dan keyin x nima?"], o: ["4", "5", "41"], a: 1 } },
    ] },
  { id: "js", cat: "prog", level: 1, t: ["JavaScript с нуля", "JavaScript noldan"],
    d: ["Язык веба: значения, функции, массивы.", "Veb tili: qiymatlar, funksiyalar, massivlar."],
    lessons: [
      { t: ["let и const", "let va const"], b: ["const нельзя переназначить, let можно.", "const qayta tayinlanmaydi, let esa mumkin."],
        q: { q: ["Что нельзя переназначить?", "Qaysi biri qayta tayinlanmaydi?"], o: ["let", "const", "оба / ikkalasi"], a: 1 } },
      { t: ["Массивы", "Massivlar"], b: ["Индексы массива начинаются с 0.", "Massiv indekslari 0 dan boshlanadi."],
        q: { q: ["Индекс первого элемента?", "Birinchi element indeksi?"], o: ["0", "1", "-1"], a: 0 } },
    ] },
  { id: "web", cat: "web", level: 1, t: ["HTML и CSS", "HTML va CSS"],
    d: ["Структура и оформление страниц.", "Sahifa tuzilishi va dizayni."],
    lessons: [
      { t: ["Теги", "Teglar"], b: ["Заголовок первого уровня — тег <h1>.", "Birinchi darajali sarlavha — <h1> tegi."],
        q: { q: ["Какой тег задаёт абзац?", "Xatboshi qaysi teg bilan beriladi?"], o: ["<p>", "<div>", "<span>"], a: 0 } },
      { t: ["Цвет в CSS", "CSS’da rang"], b: ["Свойство color задаёт цвет текста.", "color xususiyati matn rangini beradi."],
        q: { q: ["Какое свойство меняет цвет текста?", "Matn rangini qaysi xususiyat o‘zgartiradi?"], o: ["background", "color", "font"], a: 1 } },
    ] },
  { id: "alg", cat: "math", level: 2, t: ["Алгоритмы: основы", "Algoritmlar asoslari"],
    d: ["Сложность и поиск.", "Murakkablik va qidiruv."],
    lessons: [
      { t: ["Бинарный поиск", "Binar qidiruv"], b: ["Работает на отсортированном массиве, делит диапазон пополам: O(log n).", "Saralangan massivda ishlaydi, oraliqni ikkiga bo‘ladi: O(log n)."],
        q: { q: ["Сложность бинарного поиска?", "Binar qidiruv murakkabligi?"], o: ["O(n)", "O(log n)", "O(n²)"], a: 1 } },
    ] },
];
