import React from 'react'
import "./Footer.css"

export default function Footer() {
    return(
        <div className='footer container-fluid bg-dark w-100 p-5'>
            <div className="row">
                <div className='col-md-4'>
                    <p className='text-white'>Reach us through our social media accounts:</p>
                    <ul className='list'>
                    <div className="row mb-2 d-flex justify-content-center">
                            <div className='col-1'>
                                <i className="fa fa-facebook" style={{fontSize:"24px", color:"#1877f2"}}></i>
                            </div>
                            <div className="col-11">
                                <li><a href="#">Facebook</a></li>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className='col-1'>
                                <i className="fa fa-twitter" style={{fontSize:"24px", color:"#1d9bf0"}}></i>
                            </div>
                            <div className="col-11">
                                <li><a href="#">Twitter</a></li>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className='col-1'>
                                <i className="fa fa-youtube" style={{fontSize:"24px", color:"#ff0000"}}></i>
                            </div>
                            <div className="col-11">
                                <li><a href="#">Youtube</a></li>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className='col-1'>
                                <i className="fa fa-instagram" style={{fontSize:"24px", color:"#f601d1"}}></i>
                            </div>
                            <div className="col-11">
                                <li><a href="#">Instagram</a></li>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className='col-1'>
                                <i className="fa fa-whatsapp" style={{fontSize:"24px", color:"#25d366"}}></i>
                            </div>
                            <div className="col-11">
                                <li><a href="#">Whatsapp</a></li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className='row'>
                        <div className="col-md-6 text-md-end text-white">
                            <p>Breaking News Agency</p>
                            <p>517 Main St, City of Orange</p>
                            <p>New Mexico, 07050</p>
                            <p>Phone: (973) 674-2999</p>
                        </div>
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6766731.252754196!2d-110.52056827280435!3d34.093398548917584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87185043e79852a9%3A0x46bf6e1a63359eba!2sNew%20Mexico%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1677336295519!5m2!1str!2str" width="350" height="200" style={{border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='row mt-2'>
                <p className='text-secondary text-center'>Website made by Sunay Doğan, 2023</p>
            </div>
        </div>
    )
}