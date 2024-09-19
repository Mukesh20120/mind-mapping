import React, { useState } from "react";
import "./DesignPattern.css";
import logo from "./design_pattern_oop.png";

function DesignPattern() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const notes = {
    note1: `<html>
<head>
<title>
Note - 1. Factory
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
1. Factory
</h2>
<hr/>
<p>
It is used to create the object on run time we create a class that dynamic create the object.
<br/>

<br/>
Key Concepts
<br/>
Factory Method: A method in the factory class that returns an instance of a class. The exact class to be instantiated is determined by the factory.
<br/>
Product Interface: An interface or abstract class that defines the common behavior of the products created by the factory.
<br/>
Concrete Products: Classes that implement the product interface. Each concrete product represents a specific implementation of the product.
<br/>
Factory Class: A class that contains the factory method and is responsible for creating instances of concrete products.
<br/>

<br/>
When to Use
<br/>
When the exact type of the object to be created is not known until runtime.
<br/>
When you want to delegate the responsibility of object creation to a separate class, which can be modified or extended without changing the code that uses the object.
</p>
</body>
</html>
`,
    note2: `<html>
<head>
<title>
Note - Example
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Example
</h2>
<hr/>
<p>
Shape.java
<br/>
public interface Shape {
<br/>
    void draw();
<br/>
}
<br/>

<br/>
Concreate projuct 
<br/>
public class Circle implements Shape {
<br/>
    @Override
<br/>
    public void draw() {
<br/>
        System.out.println(&quot;Drawing a Circle&quot;);
<br/>
    }
<br/>
}
<br/>

<br/>
public class Rectangle implements Shape {
<br/>
    @Override
<br/>
    public void draw() {
<br/>
        System.out.println(&quot;Drawing a Rectangle&quot;);
<br/>
    }
<br/>
}
<br/>

<br/>
Factory class
<br/>
public class ShapeFactory {
<br/>
    public Shape getShape(String shapeType) {
<br/>
        if (shapeType == null) {
<br/>
            return null;
<br/>
        }
<br/>
        if (shapeType.equalsIgnoreCase(&quot;CIRCLE&quot;)) {
<br/>
            return new Circle();
<br/>
        } else if (shapeType.equalsIgnoreCase(&quot;RECTANGLE&quot;)) {
<br/>
            return new Rectangle();
<br/>
        }
<br/>
        return null;
<br/>
    }
<br/>
}
<br/>
Client code
<br/>
public class Main {
<br/>
    public static void main(String[] args) {
<br/>
        ShapeFactory shapeFactory = new ShapeFactory();
<br/>

<br/>
        // Get a Circle object
<br/>
        Shape shape1 = shapeFactory.getShape(&quot;CIRCLE&quot;);
<br/>
        shape1.draw();
<br/>

<br/>
        // Get a Rectangle object
<br/>
        Shape shape2 = shapeFactory.getShape(&quot;RECTANGLE&quot;);
<br/>
        shape2.draw();
<br/>
    }
<br/>
}
</p>
</body>
</html>
`,
    note3: `<html>
<head>
<title>
Note - 3. Singleton
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
3. Singleton
</h2>
<hr/>
<p>
Simple Analogy
<br/>
Imagine a school with a principal. No matter how many teachers, students, or classrooms there are, the school only has one principal. The principal makes important decisions and provides guidance for the entire school. If there were more than one principal, it would lead to confusion and conflicting decisions.
<br/>

<br/>
Similarly, in programming, sometimes we want to make sure there is only one instance of a particular class to manage certain operations, like the principal managing the school.
<br/>

<br/>
Key Concepts of Singleton
<br/>
Single Instance: Only one object is created for the class.
<br/>
Controlled Access: Provides a way to access this single object.
<br/>
No Direct Creation: Prevents creating objects directly from outside the class.
<br/>

<br/>
How to Create a Singleton in C++
<br/>
Private Constructor: To stop others from creating a new object directly.
<br/>
Static Instance: Holds the single instance of the class.
<br/>
Public Method: Provides access to the single instance.
</p>
</body>
</html>
`,
    note4: `<html>
<head>
<title>
Note - Example
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Example
</h2>
<hr/>
<p>
java Example
<br/>

<br/>
create SingleTon.java file
<br/>
public class volatile SingleTon {
<br/>
    private static SingleTon instance;
<br/>
    private String data;
<br/>

<br/>
    private SingleTon(String data) {
<br/>
        this.data = data;
<br/>
    }
<br/>

<br/>
    public static SingleTon getInstance(String data) {
<br/>
        SingleTon result = instance;
<br/>
        if (result == null) {
<br/>
            synchronized (SingleTon.class) {
<br/>
                result = instance;
<br/>
                if (result == null) {
<br/>
                    instance = result = new SingleTon(data);
<br/>
                }
<br/>
            }
<br/>
        }
<br/>
        return result;
<br/>
    }
<br/>

<br/>
    public String getData() {
<br/>
        return data;
<br/>
    }
<br/>
}
<br/>

<br/>
In Main.java file
<br/>
public class Main {
<br/>
    public static void main(String[] args) {
<br/>
        SingleTon instance = SingleTon.getInstance(&quot;temp&quot;);
<br/>
        System.out.println(instance.getData());
<br/>
    }
<br/>
}
</p>
</body>
</html>
`,
  };

  const handleAreaClick = (noteKey) => (event) => {
    event.preventDefault();
    setModalContent(notes[noteKey]);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  return (
    <div>
      <img src={logo} alt="Design Pattern OOP" useMap="#map" />
      <map name="map">
        <area
          shape="rect"
          coords="195,100,211,116"
          href="#"
          onClick={handleAreaClick("note1")}
        />
        <area
          shape="rect"
          coords="190,26,206,42"
          href="#"
          onClick={handleAreaClick("note2")}
        />
        <area
          shape="rect"
          coords="605,114,621,130"
          href="#"
          onClick={handleAreaClick("note3")}
        />
        <area
          shape="rect"
          coords="607,27,623,43"
          href="#"
          onClick={handleAreaClick("note4")}
        />
      </map>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DesignPattern;
