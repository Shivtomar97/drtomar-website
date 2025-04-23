document.addEventListener('DOMContentLoaded', function() {
    // Get the footer container element
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        // Directly insert the footer HTML without fetching
        footerContainer.innerHTML = `
        <footer class="footer py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h4 class="footer-title">Dr. Tomar's Homeopathy Center</h4>
                        <p>Providing advanced homeopathic treatment for complex conditions with proven success rates.</p>
                        <div class="social-icons mt-3">
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="cancer-new.html">Cancer Treatment</a></li>
                            <li><a href="mnd-new.html">MND Treatment</a></li>
                            <li><a href="psoriasis-new.html">Psoriasis Treatment</a></li>
                            <li><a href="testimonials.html">Success Stories</a></li>
                            <li><a href="contactus.html">Book Appointment</a></li>
                            <li><a href="disclaimer.html">Disclaimer</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="footer-title">Contact Information</h4>
                        <ul class="contact-info">
                            <li><i class="fas fa-map-marker-alt me-2"></i> MND Cancer Homeopathy Healing and Research Center Pvt. Ltd. , Indore, MP, India</li>
                            <li><i class="fas fa-phone me-2"></i> +91 9893029893</li>
                            <li><i class="fas fa-envelope me-2"></i> contact@drtomar.com</li>
                        </ul>
                        <h4 class="footer-title mt-4">Clinic Hours</h4>
                        <ul class="clinic-hours">
                            <li><span>Monday - Saturday:</span> 11:00 AM - 1:00 PM</li>
                            <li><span>Sunday:</span> Closed</li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom mt-4 pt-4 border-top">
                    <div class="row">
                        <div class="col-md-6 mb-2 mb-md-0">
                            <p class="mb-0">© 2025 Dr. Tomar's Homeopathy Center. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <a href="sitemap.html" class="text-muted me-3">Sitemap</a>
                            <a href="disclaimer.html" class="text-muted">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}); 