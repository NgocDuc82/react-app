import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
      <div className="footer">
            <div className="footer-list">
                <div className="footer-item">
                    <div className="title">
                        <p className="first">Digital Agency</p>
                        <a href="/">
                            <span>Building digital products,
                                brands & experience</span>
                        </a>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="title">
                        <p>Resources</p>
                        <ul className="list-span">
                            <li className="item">Guides</li>
                            <li className="item">Blog</li>
                            <li className="item">Cuistomer Stories</li>
                            <li className="item">Glossery</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="title">
                        <p>Company</p>
                        <ul className="list-span">
                            <li className="item">About Us</li>
                            <li className="item">Careers</li>
                            <li className="item">Partners</li>
                            <li className="item">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="title">
                        <p>Social Media</p>
                        <ul className="list-span">
                            <li className="item">LinkedIn</li>
                            <li className="item">Facebook</li>
                            <li className="item">Instagram</li>
                            <li className="item">Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copright">
                © Matheus. Todos os direitos reservados
            </div>
        </div>
  )
}
