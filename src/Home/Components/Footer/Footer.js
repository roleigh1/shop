import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter style={{fontSize:'12px'}} bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='www.facebook.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='www.twitter.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='www.google.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='google' />
                    </a>
                    <a href='www.instagram.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>

                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='e fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                
                               Gärtnerei Leitner:Frisches Gemüse für Wiens Märkte
                            </h6>
                            <p>
                            Mitten im Herzen von Simmering, einem lebhaften Bezirk in Wien, blüht eine besondere Gärtnerei. Hier, geschützt von der Hektik der Stadt, wachsen knackige Salate, aromatische Kräuter und bunte Gemüsesorten, die jeden Gaumen begeistern.
                            </p>
                        </MDBCol>


                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className=' fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Products
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact us
                                </a>
                            </p>

                            <p>
                                <a href='#!' className='text-reset'>
                                    Impressum
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className=' fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Vienna, Vie 1110, AT
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                info@GärtnereiLeitner.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                Developed @RoLeigh
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    
                </a>
            </div>
        </MDBFooter>
    )
}