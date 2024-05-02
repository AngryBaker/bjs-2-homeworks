function parseCount (data) {
  let parseNumber = Number.parseFloat(data);  
  if (Number.isNaN(parseNumber)) {
    throw new Error("Невалидное значение");
  } else {
    return parseNumber;
  }  
}

function validateCount(data) {
  try {
    return parseCount (data);
  } catch(error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return  this.a + this.b + this.c;
  }
    
  get area() {
    let p = this.perimeter / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    return +area.toFixed(3);
  }
}   

function getTriangle(a, b, c) {
  if (a + b < c || b + c < a || a + c < b) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }, 
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
  return new Triangle(a, b, c);
}