import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Components.module.css"
const Companies  = () => {
  return (
    <div className='mt-5 mb-5' id="Companies-container">
        <h3 className='px-5'>Top <span  className={styles.CompaniesSpan}>companies</span><i className="fa-solid fa-mobile-button "></i></h3>
        <div className='d-flex justify-content-evenly overflow-y-hidden mt-5'>
            <Link href="/">
<div className={styles.Companies}><Image
src="/apple.png"
width={120}
height={120}
alt="apple"
/></div></Link>
<Link href="/about">
<div className={styles.Companies}><Image
src="/samsung1.png"
width={120}
height={120}
alt="apple"
/></div></Link>
<Link href="/">
<div className={styles.Companies}><Image
src="/social.png"
width={120}
height={120}
alt="apple"
/></div></Link>
<Link href="/">
<div className={styles.Companies}><Image
src="/xiaomi.png"
width={120}
height={120}
alt="apple"
/></div></Link>
<Link href="/">
<div className={styles.Companies}><Image
src="/huawei.png"
width={120}
height={120}
alt="apple"
/></div></Link>
<Link href="/">
<div className={styles.Companies}><Image
src="/apple.png"
width={120}
height={120}
alt="apple"
/></div></Link>
<Link href="/">
<div className={styles.Companies}><Image
src="/apple.png"
width={120}
height={120}
alt="apple"
/></div></Link>

        </div>
    </div>
  )
}

export default Companies 