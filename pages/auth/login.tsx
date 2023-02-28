import { useSession, signIn } from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from '../../utils/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const { data, status } = useSession();
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmitSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (res?.error) {
      alert(res.error)
    } else if (res?.status === 200) {
      router.push('/');
    }
  };

  if (status === 'loading') return <p>Loading...</p>;

  if (data !== null) return <div>You are already logged in. View <a href='/' className='underline'>Home</a></div>;

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image 
            className="w-8 h-8 mr-2" 
            src={Logo}
            alt='logo'
          />
          EEA
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to explore
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitSignIn}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@company.com" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login