import './index.css'

const Blog = () =>{
    const pdfUrl = 'https://docs.google.com/document/d/1Rc0hQjGxoS3GZBk_-4me4kYeEzlzPjThaR1vtaEwa_Y/edit?usp=drive_link'

    return(

        <div>
        <a href={pdfUrl} target='"_blank' rel='noopener nonreferrer' className='research-articel'>Find our research article here </a>
        
           </div>
    

    )

};

export default Blog;


