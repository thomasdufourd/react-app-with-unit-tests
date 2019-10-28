import React from 'react';
import ReactDOM from 'react-dom';
import App, {sumNbOfExercises} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// This is a unit test!
it('provides the correct sum of exercises', () => {
  const parts = [
    {
      name: "We dont need 'name' for this test to pass",
      exercises: 1
    },
    {
      exercises: 4
    },
    {
      exercises: 5
    }
  ]
  expect(sumNbOfExercises(parts)).toEqual(10);
});

it('provides the correct sum of exercises, even for several parts', () => {
  const parts = [
    {
      exercises: 1
    },
    {
      exercises: 4
    },
    {
      exercises: 5
    }, 
    {
      exercises: 23
    }
  ]
  expect(sumNbOfExercises(parts)).toEqual(33);
});