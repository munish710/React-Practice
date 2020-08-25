import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import LifecycleA from './components/LifecycleA';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Count from './components/Count';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
function App() {
  return (
    <div className="App">
    <PostForm/>
    {/*<PostList/>
    <UserProvider  value="Munish!">
    <ComponentC/>
    </UserProvider>
    
    <Count render={(count,incrementCount)=><ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
    <Count render={(count,incrementCount)=><HoverCounterTwo count={count} incrementCount={incrementCount}/>}/>
     //This prop will go to HOC and needs to be passed down by HOC explicitly 
    <ClickCounter name="Munish"/>
    <HoverCounter/>
    <ErrorBoundary>
    <Hero heroName="Batman"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName="SuperMan"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName="Joker"/>
    </ErrorBoundary>
    
    <PortalDemo/>
      <FRParent/>
      <FocusInput/>
      <RefsDemo/>
       <ParentComp/>
     <LifecycleA/>
      h1 className={styles.success}>CSS modules, can't be used in child components are locally scoped, thus no css overrides.</h1>
      <Stylesheet/>
      <Inline/>
      <Form/>
      <NameList/>
       <UserGreeting/>
     <ParentComponent/>
      <EventBind/>
      <Counter/>
      <Greet name="Bruce" heroname="Batman" >
        <p>Batman is really cool!</p>
      </Greet>
      <Greet name="Clark" heroname="SuperMan" />
      <Welcome name="Munish" >
        <p>Testing children props for class based components.</p>
     </Welcome>   */}
    </div>
  );
}

export default App;
