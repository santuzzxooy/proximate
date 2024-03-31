import { data } from 'autoprefixer';
import React, { useState, Suspense } from 'react';

function Welcome() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/getproducts';
    const payload = {
      userToken: username,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        const datos = JSON.parse(data.data);
        console.log(datos.products);
        console.log('Inicio de sesión exitoso');
      } else {
        const toki = localStorage.getItem("token")
        console.log(toki)
        console.error('Error al iniciar sesión:', response.status);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }

  };

  return (
    <>
    <div class="login-form">
        <form onSubmit={handleSubmit}>
          <div class="content">
            <div class="input-field">
              <input type="text" autocomplete="nope" placeholder="User" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className='action'>
            <button type="submit">???</button>
          </div>
        </form>
      </div>

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="https://www.xtracking.co/images/logo-xtracking.svg" alt="Imagen" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
    </>
    
  );
}

export default Welcome;