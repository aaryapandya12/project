import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT '} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet natus corrupti sit! Obcaecati eum aspernatur officia reiciendis a modi inventore. Saepe molestias maxime ipsam vitae consequatur non repellat. Ipsam ducimus voluptatibus iste excepturi accusantium corrupti!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti saepe itaque inventore nisi odio eligendi consequuntur, blanditiis, atque quis ut alias esse praesentium? Ipsum doloribus quae doloremque laudantium unde saepe magni, in repellat nesciunt totam? Distinctio nostrum sequi vitae nemo.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus iure corporis maiores perferendis aperiam, nihil quam rem ipsum nam vitae quo ut, veritatis quaerat quisquam.</p>
          </div>

        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY '} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'> 
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance: </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad voluptatem necessitatibus obcaecati cumque eligendi voluptatibus a, hic nihil perferendis rem debitis impedit fugit dolore doloribus numquam maxime? Cum, deleniti!</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience: </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad voluptatem necessitatibus obcaecati cumque eligendi voluptatibus a, hic nihil perferendis rem debitis impedit fugit dolore doloribus numquam maxime? Cum, deleniti!</p>

          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service: </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad voluptatem necessitatibus obcaecati cumque eligendi voluptatibus a, hic nihil perferendis rem debitis impedit fugit dolore doloribus numquam maxime? Cum, deleniti!</p>

          </div>

        </div>

        <NewsletterBox/>
    </div>
  )
}

export default About