# Nodejs_With_TS_Course_Project

### Summery of Learning
Command for Compile typescript file : tsc FileName.ts For watch mode tsc --watch or tsc -w
Typescript DataTypes :
    -number (1,53,-10)
    -string ('hi',"Hello",`Kem chhe ${Variable_name}`)
    -boolean ( true,false)
    -Object ( {age : 30})
    -Array ([1,2,3],['a','b','c'])
    -Tuple ([1,"Hello"] -> Variable_name : [number,string])
    -Enum enum Variable_name{ADMIN,READ_ONLY,Author} -> Added by Typescript : Automatically enumerated globle constant identifiers

### !The core primitive types in TypeScript are all lowercase!
### Main Task : Chcking Type of the variable


### let : Block Scope | changeble
### Const : Block Scope | Cannot change

### -Class
    -Access Modifiers
        -public
        -protected
        -private
    -Inheritance
    -Static variable and Methods
        -Static variable and method can be call directly without class instance
    -Abstract class
        -It can not be initiated and it has to be extended.
    -Singletons and private Constructors
        -It create only one instance of a class

### -Interface
    -Only extended or implemented to the class
    -Can not initiated

### -Intersection (&)
    -type ElevatedEmployee = Admin & Employee ->(Admin and Employee both are type defining above)
    
### -Type guards
    -Typeof
    -in -> 'name' in emp
    -instanceof ->vehical instanceof Truck
    
### -Type Casting
    -<elementType> (e.g : const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;)
    -as elementType (e.g : (userInputElement as HTMLInputElement).value = 'Hi there!';)

### -Index Properties
    -defination -> [prop : string] : string
    -example -> email : "XYZ@example.com"
 
