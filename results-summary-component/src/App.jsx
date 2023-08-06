import { useEffect, useState } from 'react'
import './reset.css';
import jsondata from './data.json';

//Component
import DataSummary from './SummaryComponent';

function App() {

  const [data, setData] = useState(jsondata);

  return (
    <div className='grid font-HankenGrotesk sm:rounded-3xl sm:shadow-2xl sm:shadow-dark-grey-blue-t w-auto sm:mx-auto sm:grid-cols-2 sm:max-w-3xl'>
          <div className='flex flex-col sm:flex-row text-white'>
            <div className='flex flex-col h-auto bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-3xl items-center sm:rounded-3xl sm:justify-evenly'>
              <h1 className='text-center p-5 mt-3 text-lg' >Your result</h1>
              <div className='flex flex-col rounded-full text-center p-7 bg-gradient-to-b from-violet-blue to-persian-blue w-40 h-40 justify-center'>
                <p className='text-2xl text-head'>76</p>
                <p className='mt-3 text-xs'>of 100</p>
              </div>
              <h2 className='text-lg mt-5'>Great</h2>
              <p className='text-center mx-auto mt-5 mb-6 w-8/12'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
          </div>
          <div className='p-8'>
            <div className='flex flex-col'>
              <h2 className='text-dark-grey-blue font-HGBold mt-1 text-lg'>Summary</h2>
              <div className=' grid gap-2'>
                <DataSummary category={`${data[0]['category']}`} imagesrc={`${data[0]['icon']}`} score={`${data[0]['score']}`} b-color={'hsla(0, 100%, 67%, 0.1)'} t-color={'hsl(0, 100%, 67%)'}/>
                <DataSummary category={`${data[1]['category']}`} imagesrc={`${data[1]['icon']}`} score={`${data[1]['score']}`} b-color={'hsla(39, 100%, 56%, 0.1)'} t-color={'hsl(39, 100%, 56%)'}/>
                <DataSummary category={`${data[2]['category']}`} imagesrc={`${data[2]['icon']}`} score={`${data[2]['score']}`} b-color={'hsla(166, 100%, 37%, 0.1)'} t-color={'hsl(166, 100%, 37%)'}/>
                <DataSummary category={`${data[3]['category']}`} imagesrc={`${data[3]['icon']}`} score={`${data[3]['score']}`} b-color={'hsla(234, 85%, 45%, 0.1)'} t-color={'hsl(234, 85%, 45%)'}/>
              </div>
              <button className='mt-5 w-auto py-3 bg-dark-grey-blue rounded-3xl text-white text-sm'>Continue</button>
            </div>
          </div>
    </div>

  )
}

export default App;
