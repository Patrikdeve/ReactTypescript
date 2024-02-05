import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Container } from './Components/Container';
import { LoggedIn } from './Components/State/LoggedIn';
import { User } from './Components/State/User';
import { Counter } from './Components/State/Counter';
import { ThemeContextProvider } from './Components/Context/ThemeContext';
import { Box } from './Components/Context/Box';
import { UserContextProvider } from './Components/Context/UserContext';
import { User1 } from './Components/Context/User1';
import { Mutableref } from './Components/ref/MutableRef';
import { ClassCounter } from './Components/Class/ClassCounter';
import { Private } from './Components/Auth/Private';
import { Profile } from './Components/Auth/Profile';
import { List } from './Components/Generics&Restricting Props/List';
import { RandomNumber } from './Components/Generics&Restricting Props/RandomNumber';
import { Toast } from './Components/TemplateLiterals/Toast';
import { CustomButton } from './Components/WrappingHTML/Button';
import { CustomInput } from './Components/WrappingHTML/Input';
import { Text } from './Components/PolymorphicComponents/Text';
function App() {
  const personname = {
    fname: "Bruce", 
    lname: 'Banner'
  }
  const nameList = [
    {
      fname: "Bruce", 
      lname: 'Banner'     
    }, 
    {
      fname: "Clark", 
      lname: 'Kent'     
    }, 
    {
      fname: "Omkar", 
      lname: 'Malave'     
    }
  ]
  const itemList = ['Omkar Malave', 'Shreyash Deogirkar', 'Aditya Gurjar']
  const [value, setvalue] = useState(''); 
  return (
    <div className="App">
      {/* <Greet name = "Omkar" msgcount={20} isLoggedIn = {false}/>
      <Person name = {personname}/>
      <PersonList nameList = {nameList}/> */}

      {/* <Heading>Hello Guys I am Children of Heading!!</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Amit Kapase !!
        </Heading>
      </Oscar>

      <Greet name='Omkar' isLoggedIn = {true} />
    
      <Button handleClick = {(event, id) => {
       console.log(`Button is Clicked`, event, id)
      }}></Button> */}

      {/* <Input value={value} handleChange={(event) => {
        setvalue(event.target.value)
      }} />
      
      
      <Container styles = {{border:`3px solid black`, padding:`2rem`, margin:`2rem`}} />
      {/* <Person name = {personname}/>
      <PersonList nameList = {nameList} /> */}

      {/* <LoggedIn/> */}
      {/* <User name='Shreyash' email = 'Shreyash@example.com'/>
    
      <Counter/> */}

      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User1/>
      </UserContextProvider>
      
       <Mutableref/> 

      <ClassCounter message = 'Count - '/> */}

      {/* <Private isLoggedIn = {false} Component={Profile}/>
      
      <List items = {itemList} onClick = {(item) => console.log(item)} />
      <List items = {[1, 2, 3, 4]} onClick = {(item) => console.log(item)} /> */}

      
      <RandomNumber value={10} isPositive/>
      
      <Toast position ='top-left' />
      
      <CustomButton variants='primary' onClick={() => console.log('Clicked')}> CustomButton Label </CustomButton>
      <br/>
      <CustomInput placeholder='Enter Your name' />

      <Text as= 'h3' size='lg'> Heading</Text>
      <Text as= 'p'size='md'> Paragraph</Text>
      <Text as = 'label'size='sm'> Label</Text>
    </div>
  );
}

export default App;
