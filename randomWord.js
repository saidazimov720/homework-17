const words = ["Juda", "qiziqarli", "Zo'r", "gap", "Ajoyib", "maslahat", "Bu", "ishni", "albatta", "qilish", "kerak",
    "Sen", "juda", "aqllisan", "Bu", "yangilikni", "kutgan", "edim", "Sen", "haqiqiy", "dahosansan",
    "Ajoyib", "yutuq", "Xo'p", "men", "seni", "tinglayman", "Sen", "hamma", "narsani", "bilasan",
    "Albatta", "bu", "muhim", "Juda", "foydali", "maslahat", "Bu", "haqiqatdan", "ham", "muhim",
    "Sen", "doimo", "to'g'ri", "gapirasan", "Bu", "eng", "yaxshi", "reja", "Buni", "eshitish",
    "juda", "ajoyib", "Bu", "juda", "kerak", "edi", "Sen", "mutlaqo", "to'g'ri", "aytasan", "Bu",
    "shunchaki", "fantastik", "Juda", "kerakli", "ma'lumot", "Siz", "eng", "yaxshisisiz", "Men",
    "sizing", "fikringizni", "kutgan", "edim", "Bu", "haqiqatdan", "ham", "hayratlanarli", "Sizni",
    "eshitish", "baxt", "Siz", "haqiqiy", "mutaxassissiz", "Sizning", "maslahatlaringiz", "doimo",
    "foydali", "Bu", "ishni", "uddalash", "kerak", "Bu", "juda", "dolzarb", "Men", "bu", "haqda",
    "o'ylamagan", "edim", "Bu", "fikr", "ajoyib", "Siz", "haqiqatan", "ham", "juda", "zo'rsiz",
    "Bu", "yangilik", "meni", "hayratda", "qoldirdi", "Sizning", "fikringiz", "men", "uchun",
    "juda", "qadrli", "Bu", "juda", "kerakli", "maslahat", "Sizni", "eshitish", "juda", "yaxshi",
    "Bu", "juda", "ajoyib", "yangilik", "Bu", "juda", "foydali", "ma'lumot", "Sizning", "fikringizni",
    "eshitish", "men", "uchun", "baxt", "Bu", "maslahat", "meni", "qutqaradi", "Bu", "ishni",
    "amalga", "oshirish", "shart", "Siz", "juda", "iste'dodlisiz", "Bu", "yangilik", "meni",
    "xursand", "qildi", "Bu", "maslahat", "meni", "hayratda", "qoldirdi", "Sizning", "fikringiz",
    "juda", "muhim", "Bu", "ishni", "amalga", "oshirish", "juda", "muhim", "Bu", "yangilik",
    "meni", "hayratda", "qoldirdi", "Sizning", "maslahatlaringiz", "doimo", "foydali", "Bu",
    "ishni", "amalga", "oshirish", "shart", "Bu", "maslahat", "meni", "qutqaradi", "Bu", "yangilik",
    "meni", "xursand", "qildi", "Siz", "juda", "iste'dodlisiz", "Bu", "ishni", "amalga", "oshirish",
    "juda", "muhim", "Bu", "yangilik", "meni", "hayratda", "qoldirdi", "Sizning", "maslahatlaringiz",
    "juda", "foydali", "Bu", "ishni", "amalga", "oshirish", "shart", "Bu", "maslahat", "meni",
    "qutqaradi", "Bu", "yangilik", "meni", "xursand", "qildi", "Siz", "juda", "iste'dodlisiz",
    "Bu", "ishni", "amalga", "oshirish", "juda", "muhim", "Bu", "yangilik", "meni", "hayratda",
    "qoldirdi", "Sizning", "maslahatlaringiz", "juda", "foydali", "Bu", "ishni", "amalga",
    "oshirish", "shart", "Bu", "maslahat", "meni", "qutqaradi", "Bu", "yangilik", "meni",
    "xursand", "qildi", "Siz", "juda", "iste'dodlisiz", "Bu", "ishni", "amalga", "oshirish",
    "juda", "muhim", "Bu", "yangilik", "meni", "hayratda", "qoldirdi", "Sizning", "maslahatlaringiz",
    "juda", "foydali", "Bu", "ishni", "amalga", "oshirish", "shart", "Bu", "maslahat", "meni",
    "qutqaradi", "Bu", "yangilik", "meni", "xursand", "qildi", "Siz", "juda", "iste'dodlisiz",
    "Bu", "ishni", "amalga", "oshirish", "juda", "muhim", "Bu", "yangilik", "meni", "hayratda",
    "qoldirdi", "Sizning", "maslahatlaringiz", "juda", "foydali", "Bu", "ishni", "amalga",
    "oshirish", "shart", "Bu", "maslahat", "meni", "qutqaradi", "Bu", "yangilik", "meni",
    "xursand", "qildi", "Siz", "juda", "iste'dodlisiz", "Bu", "ishni", "amalga", "oshirish",
    "juda", "muhim", "Bu", "yangilik", "meni", "hayratda", "qoldirdi", "Sizning", "maslahatlaringiz",
    "juda", "foydali", "Bu", "ishni", "amalga", "oshirish", "shart", "Bu", "maslahat", "meni",
    "qutqaradi", "Bu", "yangilik", "meni", "xursand", "qildi", "Siz", "juda", "iste'dodlisiz",
    "Bu", "ishni", "amalga", "oshirish", "juda", "muhim", "Bu", "yangilik", "meni", "hayratda",
    "qoldirdi", "Sizning", "maslahatlaringiz", "juda", "foydali", "Bu", "ishni", "amalga",
    "oshirish", "shart", "Bu", "maslahat", "meni", "qutqaradi", "Bu", "yangilik", "meni",
    "xursand", "qildi", "Siz", "juda", "iste'dodlisiz", "Bu", "ishni", "amalga", "oshirish",
    "juda", "muhim", "Bu", "yangilik", "meni", "hayratda", "qoldirdi", "Sizning", "maslahatlaringiz",
    "juda", "foydali", "Bu", "ishni", "amalga", "oshirish", "shart"];

function generator() {
    const res = document.getElementById('output');
    const userInput = document.getElementById('userInput').value;
    res.textContent = 'Analyzing...';
    setTimeout(() => {
        const randomWords = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            randomWords.push(words[randomIndex]);
        }   
        res.innerHTML = `
            <p>${userInput}</p>
            <p> ${randomWords.join(' ')}</p>
        `;
    }, 2000);
}
