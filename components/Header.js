import Image from 'next/image';
import HeaderItems from './HeaderItems';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    } from "@heroicons/react/outline";

function Header() {
    // console.log(requests.fetchTopRated.url);
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            {/* Passing props to HeaderItems */}
            <HeaderItems title='HOME' Icon={HomeIcon} /> 
            <HeaderItems title='TRENDING' Icon={LightningBoltIcon}/> 
            <HeaderItems title='VERIFIED' Icon={BadgeCheckIcon} />  
            <HeaderItems title='COLLECTIONS' Icon={CollectionIcon} /> 
            <HeaderItems title='SEARCH' Icon={SearchIcon} /> 
            <HeaderItems title='ACCOUNT' Icon={UserIcon} /> 
        </div>

        <Image className='object-contain' src='https://links.papareact.com/ua6' width={200} height={150}/>
    
    </header>
  )
}

export default Header   