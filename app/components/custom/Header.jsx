import React, { useContext } from 'react'
import { Button } from "@/components/ui/button"
import Color from '@/app/data/Color'
import { UserDetailContext } from '@/app/context/UserDetailContext'


const Header = () => {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  return (
    <div className='p-4 flex justify-between items-center'>
        <img src={"/"} alt="logo" width={40} height={40} />
        {(!userDetail || !userDetail.name) && <div className='flex gap-5'>
        <Button variant='ghost'>sign in</Button>
        <Button className='text-white' style={{
            backgroundColor:Color.BLUE
        }}>Get started</Button>
        </div>}
    </div>
  )
}

export default Header