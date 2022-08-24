import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SlotPicker from '../.';
import { Dayjs } from 'dayjs';

const App = () => {

  return (

    <div style={{ padding: '3rem' }}>

      {['ar', 'en', 'fr'].map((lang: 'ar' | 'en' | 'fr') => (
        <>
          <br />
          <SlotPicker
            interval={15}
            from={'07:00'}
            to={'20:00'}
            unAvailableSlots={['12:00']}
            lang={lang}
            defaultSelectedTime="12:00"
            onSelectTime={(s: Dayjs) => console.log(s)}
          />
        </>
      ))}
      <br />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
