import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const Newsletter = () => (
  <div classNameName="Newsletter">
  {/*
<div className="body-type" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #00284c;" data-component="Newsletter">
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #00284c;">
                <tr>
                    <td align="center" valign="top" id="bodyCell" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;border-top: 10px solid #3F3F38;">
                        
                        <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;">
                            <tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #00284c;border-top: 0;border-bottom: 0;">
                                        <tr>
                                            <td valign="top" className="preheaderContainer" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnTextBlockOuter">
        <tr>
            <td valign="top" className="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
                
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" className="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" className="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;font-family: Verdana;font-size: 10px;line-height: 125%;text-align: left;">
                        
                            <div style="text-align: right;"><a href="*|ARCHIVE|*" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFFFFF;font-weight: normal;text-decoration: underline;"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#e7b932">View this mail in your browser</span></span></a></div>

                        </td>
                    </tr>
                </tbody></table>
                
                
                
            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #00284c;border-top: 0;border-bottom: 0;">
                                        <tr>
                                            <td valign="top" className="headerContainer" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnDividerBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
    <tbody className="mcnDividerBlockOuter">
        <tr>
            <td className="mcnDividerBlockInner" style="min-width: 100%;padding: 10px 18px 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <table className="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 1px outset #EAEAEA;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody><tr>
                        <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnCaptionBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnCaptionBlockOuter">
        <tr>
            <td className="mcnCaptionBlockInner" valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                

<table border="0" cellpadding="0" cellspacing="0" className="mcnCaptionLeftContentOuter" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td valign="top" className="mcnCaptionLeftContentInner" style="padding: 0 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <table align="right" border="0" cellpadding="0" cellspacing="0" className="mcnCaptionLeftImageContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <tbody><tr>
                    <td className="mcnCaptionLeftImageContent" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    
                        
                        <img alt="" src="https://gallery.mailchimp.com/9c248cffc3a5176e9f60274c7/images/f105a729-50d8-4afc-a0d2-5fd3e4a216fb.png" width="132" style="max-width: 200px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" className="mcnImage"/>
                        
                    
                    </td>
                </tr>
            </tbody></table>
            <table className="mcnCaptionLeftTextContentContainer" align="left" border="0" cellpadding="0" cellspacing="0" width="396" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <tbody><tr>
                    <td valign="top" className="mcnTextContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;font-family: Georgia;font-size: 16px;line-height: 150%;text-align: left;">
                        <br />
<span style="font-size:16px"><span style="color:#e7b932"><span style="font-family:merriweather sans,helvetica neue,helvetica,arial,sans-serif"><strong>SJTU Student & Alumni Association at UM</strong></span></span></span><br />
<br />
<span style="font-size:37px"><span style="font-family:merriweather sans,helvetica neue,helvetica,arial,sans-serif"><span style="color:#FFFFFF"><strong>JI Alumni Newsletter</strong></span></span></span>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>





            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnDividerBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
    <tbody className="mcnDividerBlockOuter">
        <tr>
            <td className="mcnDividerBlockInner" style="min-width: 100%;padding: 5px 18px 10px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <table className="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 1px outset #EAEAEA;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody><tr>
                        <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnBoxedTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    
    <tbody className="mcnBoxedTextBlockOuter">
        <tr>
            <td valign="top" className="mcnBoxedTextBlockInner" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnBoxedTextContentContainer">
                    <tbody><tr>
                        
                        <td style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        
                            <table border="0" cellpadding="18" cellspacing="0" className="mcnTextContentContainer" width="100%" style="min-width: 100% !important;background-color: #00284C;border: 5px double #E7B932;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody><tr>
                                    <td valign="top" className="mcnTextContent" style="color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
                                        <div style="text-align: justify;"><span style="font-size:15px"><strong><span style="font-family:comic sans ms,marker felt-thin,arial,sans-serif"><span style="color:#e7b932">Dear JI alumni, <br />
Greetings from SJTU Student and Alumni Association from Ann Arbor! It’s cold and snowy here in Ann Arbor currently. Hope you are all enjoying your time no matter where you are and how the weather is. This is a newsletter developed by SJTU SAA Alumni Connection branch, in hope to update you all with featured student activities in SAA and some information about JI development. Feel free to contact us if you are interested or have any question about this newsletter or SJTU SAA. We sincerely wish you a happy thanksgiving and thanks God that we can all have one name, JIer. <br />
SJTU SAA</span></span></strong></span></div>

                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
                
                
                
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnTextBlockOuter">
        <tr>
            <td valign="top" className="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
                
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" className="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" className="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;font-family: Georgia;font-size: 16px;line-height: 150%;text-align: left;">
                        
                            <h2 className="null" style="text-align: justify;display: block;margin: 0;padding: 0;font-family: "Lucida Grande";font-size: 17px;font-style: normal;font-weight: normal;line-height: 125%;letter-spacing: -.75px;color: #3F3F38 !important;"><span style="color:#e7b932"><strong><span style="font-size:18px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif">Introduction to SJTU-SAA-UM  </span></span></strong></span><span style="font-size:14px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#FFFFFF">As the official student organization recognized by both universities, SJTU Student & Alumni Association at UM (SJTU-SAA-UM) is completely run by SJTU students and is aimed at serving the SJTU students and alumni at UM. We work with both universities as well as industry partners to provide professional development resources, culture immersion programs, and networking opportunities. Our goal is to help the students and alumni become successful in their future personal development.</span></span></span></h2>

<div style="text-align: justify;"><span style="font-size:14px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#FFFFFF">In addition, SJTU-SAA-UM also serves as a community builder by connecting cross-culture and cross-industry talents. We work closely with the alumni associations from both universities. President and advisors of SJTU-SAA-UM also serve as the board of directors for the SJTU Alumni Association in Greater Michigan (SJTUAAMI).</span></span></span></div>

                        </td>
                    </tr>
                </tbody></table>
                
                
                
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnImageCardBlockOuter">
        <tr>
            <td className="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
<table align="left" border="0" cellpadding="0" cellspacing="0" className="mcnImageCardBottomContent" width="100%" style="background-color: #00284C;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td className="mcnImageCardBottomImageContent" align="left" valign="top" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        
            

            <img alt="" src="https://gallery.mailchimp.com/9c248cffc3a5176e9f60274c7/images/272c7ffc-138b-4ed8-84a0-01aca3608877.jpg" width="564" style="max-width: 1024px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" className="mcnImage"/>
            
        
        </td>
    </tr>
    <tr>
        <td className="mcnTextContent" valign="top" style="padding: 9px 18px;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;line-height: 150%;" width="546">
            <div style="text-align: justify;"><span style="color:#e7b932"><strong><span style="font-size:18px">Townhall Meeting</span></strong></span><span style="font-size:14px"><span style="color:#FFFFFF"> On October 31st, Dean of Joint Institute Peisen Huang came to University of Michigan and held a townhall with JI students. During the townhall, Dean Huang brought us some exciting updates on current programs between JI and UM including the cooperation with </span><a href="http://michiganross.umich.edu/mm-shanghai" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #3F3F38;font-weight: normal;text-decoration: underline;"><span style="color:#e7b932">Ross School of Business</span></a><span style="color:#FFFFFF"> and newly-created graduate programs with other universities in Europe. </span></span><span style="color:#FFFFFF">Those newly-developed programs aim at providing JI students with more interdisciplinary and international experiences. Dean Huang also proposed potential research opportunities on SJTU campus conducted by UM professors, which aroused students' interest.</span></div>

        </td>
    </tr>
</tbody></table>




            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #00284c;border-top: 0;border-bottom: 0;">
                                        <tr>
                                            <td valign="top" className="bodyContainer" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnImageCardBlockOuter">
        <tr>
            <td className="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
<table align="left" border="0" cellpadding="0" cellspacing="0" className="mcnImageCardBottomContent" width="100%" style="background-color: #00284C;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td className="mcnImageCardBottomImageContent" align="left" valign="top" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        
            

            <img alt="" src="https://gallery.mailchimp.com/9c248cffc3a5176e9f60274c7/images/7a55bdf6-6663-41c2-8718-361deb625f9b.jpg" width="564" style="max-width: 1024px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" className="mcnImage"/>
            
        
        </td>
    </tr>
    <tr>
        <td className="mcnTextContent" valign="top" style="padding: 9px 18px;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;line-height: 150%;" width="546">
            <div style="text-align: justify;"><span style="color:#e7b932"><span style="font-size:18px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><strong>Coherix Workshop</strong></span></span></span><span style="font-size:14px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#FFFFFF"> On November 2nd, Dwight Carlson, the CEO of Coherix Inc. held a career development workshop for JI students. A new project ‘Company Day’ was launched, where JI students can work on a real engineering or marketing challenge on site with Coherix employees. Also, Dwight will share his experience on team building and leadership. </span></span></span><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#FFFFFF">Our Dean, Jun Ni serves on Coherix, Inc. Board of Directors. There have been broad collaborations between Jun Ni’s team and Coherix Inc. Apart from Coherix, we have also built relationship with Google, Yik Yak and New York Primus. These companies will </span></span><span style="color:#FFFFFF">refer to us for recruitment, and provide sponsorship for our activities. CSSA (Chinese Students and Scholars Association) will also work jointly with us to hold many kinds of activities.</span></div>

        </td>
    </tr>
</tbody></table>




            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnImageCardBlockOuter">
        <tr>
            <td className="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
<table align="right" border="0" cellpadding="0" cellspacing="0" className="mcnImageCardBottomContent" width="100%" style="background-color: #00284C;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td className="mcnImageCardBottomImageContent" align="left" valign="top" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        
            

            <img alt="" src="https://gallery.mailchimp.com/9c248cffc3a5176e9f60274c7/images/cf16a23e-bf7e-4830-888d-3f36ce99f103.jpg" width="564" style="max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" className="mcnImage"/>
            
        
        </td>
    </tr>
    <tr>
        <td className="mcnTextContent" valign="top" style="padding: 9px 18px;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;line-height: 150%;" width="546">
            <div style="text-align: justify;"><span style="color:#e7b932"><span style="font-size:18px"><strong>Launch of AEDP</strong></span></span><span style="color:#FFFFFF"> On the occasion of Michigan Governor Rick Snyder’s visit to SJTU on November 12, 2016, UM-SJTU Joint Institute and the University of Michigan Ross School of Business jointly announced the launch of the </span><a href="http://umji.sjtu.edu.cn/news/ji-and-um-ross-school-of-business-launch-the-automotive-executive-development-program/" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #3F3F38;font-weight: normal;text-decoration: underline;"><span style="color:#e7b932">Automotive Executive Development Program</span></a><span style="color:#FFFFFF">. This program will provide two weeks of immersed learning experience in North America and visits to famous enterprises and high-level exchange with academic experts, which help students understand the automotive industry and learn to master the strategies.</span></div>

        </td>
    </tr>
</tbody></table>




            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnDividerBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
    <tbody className="mcnDividerBlockOuter">
        <tr>
            <td className="mcnDividerBlockInner" style="min-width: 100%;padding: 5px 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <table className="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 1px outset #EAEAEA;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody><tr>
                        <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnTextBlockOuter">
        <tr>
            <td valign="top" className="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
                
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" className="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" className="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #3F3F38;font-family: Georgia;font-size: 16px;line-height: 150%;text-align: left;">
                        
                            <span style="color:#e7b932"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><strong><span style="font-size:18px">Thanksgiving Dumpling's Feast  </span></strong></span></span><span style="font-size:14px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#FFFFFF">We are holding a Thanksgiving Dumpling's Feast this Sunday (November 27) 12:00 PM-3:30 PM at Northwood Community Center, on which you will have the opportunity to taste and make dumplings! If you are available, don't hesitate to join us! Click the </span></span></span><span style="font-size:16px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><a href="https://docs.google.com/a/umich.edu/forms/d/e/1FAIpQLSeFbJg_XlDBXF9yxyay4ceirm4LJSG92HtMtyV7-AeE1YxIxA/viewform" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #3F3F38;font-weight: normal;text-decoration: underline;"><span style="color:#e7b932">link</span></a></span></span><span style="font-size:14px"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color:#FFFFFF"> to sign up.</span></span></span>
                        </td>
                    </tr>
                </tbody></table>
                
                
                
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnBoxedTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    
    <tbody className="mcnBoxedTextBlockOuter">
        <tr>
            <td valign="top" className="mcnBoxedTextBlockInner" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnBoxedTextContentContainer">
                    <tbody><tr>
                        
                        <td style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        
                            <table border="0" cellpadding="18" cellspacing="0" className="mcnTextContentContainer" width="100%" style="min-width: 100% !important;background-color: #E7B932;border: 7px ridge #E7B932;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody><tr>
                                    <td valign="top" className="mcnTextContent" style="color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
                                        <div style="text-align: justify;"><span style="font-size:17px"><strong><span style="font-family:comic sans ms,marker felt-thin,arial,sans-serif"><span style="color:#00284c">If you would like to share your brilliant thoughts about our newsletter, click </span><a href="https://docs.google.com/a/umich.edu/forms/d/e/1FAIpQLSeG8L0tKvjCtYBD-Qeu5xVBpBlxJ__SaL1kgdR74xkTqriJTw/viewform" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #3F3F38;font-weight: normal;text-decoration: underline;"><span style="color:#00284c"><span style="background-color:#e7b932">HERE</span></span></a><span style="color:#00284c">. After we receive your response, you will have the chance to get a SJTU-SAA Badge.<br />
<br />
If you want to get connected with alumni around you, take a minute to fill out this </span><a href="https://docs.google.com/a/umich.edu/forms/d/e/1FAIpQLSeFm5r28UjhMDj4Puqw67JG7IjRujLHy-9wof273lPVwHRLfA/viewform" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #3F3F38;font-weight: normal;text-decoration: underline;"><span style="color:#00284c"><span style="background-color:#e7b932">FORM</span></span></a><span style="color:#00284c">.</span></span></strong></span></div>

                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
                
                
                
            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateColumns" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #00284c;border-top: 0;border-bottom: 0;">
                                        <tr>
                                            <td align="left" valign="top" className="columnsContainer" width="50%" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="templateColumn" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <tr>
                                                        <td valign="top" className="leftColumnContainer" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="left" valign="top" className="columnsContainer" width="50%" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="templateColumn" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <tr>
                                                        <td valign="top" className="rightColumnContainer" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #00284c;border-top: 0;border-bottom: 0;">
                                        <tr>
                                            <td valign="top" className="footerContainer" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnImageBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" className="mcnImageContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <tbody><tr>
                            <td className="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                
                                    
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/9c248cffc3a5176e9f60274c7/images/cfaa3e40-d634-43d8-8e94-2deda3b56315.png" width="436" style="max-width: 436px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" className="mcnImage"/>
                                    
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnDividerBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
    <tbody className="mcnDividerBlockOuter">
        <tr>
            <td className="mcnDividerBlockInner" style="min-width: 100%;padding: 20px 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <table className="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 1px outset #FFFFFF;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody><tr>
                        <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnTextBlockOuter">
        <tr>
            <td valign="top" className="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                
                
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" className="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" className="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #ffd700;font-family: Verdana;font-size: 10px;line-height: 125%;text-align: left;">
                        
                            <span style="color:#FFFFFF"><em>Copyright © Shanghai Jiao Tong University Student & Alumni Association at University of Michigan, All rights reserved.</em><br />
<br />
<strong>Our mailing address is:</strong></span><br />
<span style="color:#e7b932">sjtusaa-board-2016@umich.edu</span><br />
<br />
<span style="color:#FFFFFF">Want to change how you receive these emails?</span><br />
<span style="color:#FFFFFF">You can</span> <a href="*|UPDATE_PROFILE|*" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-weight: normal;text-decoration: underline;">update your preferences</a> <span style="color:#FFFFFF">or</span> <a href="*|UNSUB|*" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-weight: normal;text-decoration: underline;">unsubscribe from this list</a><br />
<br />
*|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*
                        </td>
                    </tr>
                </tbody></table>
                
                
                
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnFollowBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody className="mcnFollowBlockOuter">
        <tr>
            <td align="center" valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnFollowBlockInner">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnFollowContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td align="center" style="padding-left: 9px;padding-right: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnFollowContent">
                <tbody><tr>
                    <td align="center" valign="top" style="padding-top: 9px;padding-right: 9px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <tbody><tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    
                                    
                                        
                                        
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" className="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                    <a href="https://www.facebook.com/groups/1651730788401287/?fref=ts" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" className=""/></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                        
                                    
                                        
                                        
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" className="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                    <a href="https://www.linkedin.com/company/sjtu-student-&-alumni-association-at-the-university-of-michigan?trk=prof-following-company-logo" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-linkedin-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" className=""/></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                        
                                    
                                        
                                        
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right: 0;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" className="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" className="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" className="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                    <a href="https://maizepages.umich.edu/organizations/unknownorganization" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" className=""/></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                        
                                    
                                    
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr>
            </table>
        </center>
    </div>
	*/}
	</div>
);

export default Newsletter;