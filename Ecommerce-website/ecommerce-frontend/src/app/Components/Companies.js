import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Companies  = () => {
  return (
    <div className=''>
        <h3>Top <span className='text-danger'>companies</span><i className="fa-solid fa-mobile-button "></i></h3>
        <section className='d-flex justify-content-evenly px-5'>
            <Link href="/">
<div className="companies"><Image
src="/apple.png"
width={150}
height={150}
alt="apple"
/></div></Link>
<Link href="/">
<div className="companies"><Image
src="/samsung1.png"
width={150}
height={150}
alt="apple"
/></div></Link>
<Link href="/">
<div className="companies"><Image
src="/social.png"
width={150}
height={150}
alt="apple"
/></div></Link>
<Link href="/">
<div className="companies"><Image
src="/xiaomi.png"
width={150}
height={150}
alt="apple"
/></div></Link>
<Link href="/">
<div className="companies"><Image
src="/huawei.png"
width={150}
height={150}
alt="apple"
/></div></Link>
<Link href="/">
<div className="companies"><Image
src="/apple.png"
width={150}
height={150}
alt="apple"
/></div></Link>
<Link href="/">
<div className="companies"><Image
src="/apple.png"
width={150}
height={150}
alt="apple"
/></div></Link>

        </section>
    </div>
  )
}

export default Companies 