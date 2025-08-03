import React, { useState } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { RiUserShared2Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const { userRegister, userProfileUpdate } = useAuth();
  const [textPassword, setTextPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // Password validation 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(textPassword)) {
      setError('Password must be at least 6 characters and include 1 capital letter, 1 small letter, and 1 number.')
      return;
    }

    setError('');

    // user sing up with firebase
    userRegister(email, password)
      .then(result => {
        if (result.user) {
          // user profile update in the firebase
          const profile = {
            displayName: name,
            photoURL: photoURL
          }
          userProfileUpdate(profile)
            .then(() => {
              console.log('user profile update successfully')
              toast.success('user register is successfully', {
                autoClose: 2000,
              })
              navigate('/')
            })
            .catch(error => {
              console.log(error.message);
            })
          // react-toastify using successfully user account create notification show

        }
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div>
      <article>
        <title>Marketing || Register</title>
      </article>
      <div className="flex h-[700px] w-10/12 mt-22 mx-auto">
        <div className="w-full hidden md:inline-block">
          <img className="h-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" alt="leftSideImage" />
        </div>

        <div className="w-full flex flex-col items-center justify-center">

          <form onSubmit={handleRegister} className="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-gray-900 font-medium">Sign Up</h2>
            <p className="text-sm text-gray-500/90 mt-3">Welcome back! Please sign up to continue</p>

            <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
            </button>

            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-gray-300/90"></div>
              <p className="w-full text-nowrap text-sm text-gray-500/90">or sign up with email</p>
              <div className="w-full h-px bg-gray-300/90"></div>
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <RiUserShared2Line className='text-gray-500' />
              <input type="text" placeholder="User name" name='name' className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden mt-6 pl-6 gap-2">
              <MdOutlineAddPhotoAlternate className='text-gray-500' />
              <input type="url" placeholder="Photo URL" name='photoURL' className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden mt-6 pl-6 gap-2">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
              </svg>
              <input type="email" placeholder="Email id" name='email' className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
              </svg>
              <input type="password" placeholder="Password" name='password' value={textPassword} onChange={(e) => setTextPassword(e.target.value)} className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            {
              error && <p className='text-sm text-red-500'>{error}</p>
            }

            <input type="submit" className='mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity' value="Register Now" />
            <p className="text-gray-500/90 text-sm mt-4">Already have an account? Please <Link to="/login" className="text-indigo-400 hover:underline" >Sign in</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;