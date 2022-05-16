import React from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import Footers from '../Footers/Footers';

const Undergraduate = () => {
    useEffect(() => {
        document.title = "Undergraduate";
      }, []);
    return (
        <div >
            <Header />
             <h1>Program Structure</h1>
            <h5>Term Wise Course Distribution</h5> <br />
           <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">First Year: First Term</h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE 111</td>
        <td>Analytic Mechanics</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>MATH 111</td>
      <td>Differential and Integral Calculus, Matrices</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CHEM 113</td>
      <td>Chemistry I</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>PHY 121</td>
      <td>Physics I: Physical Optics, Waves and Oscillation, Heat and Thermodynamics</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>HUM 101</td>
      <td>Bangladesh Studies</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>HUM 121</td>
      <td>English</td>
      <td>3.0</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>16.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE 110</td>
      <td>Civil Engineering Drawing</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>CHEM 114</td>
      <td>Inorganic Quantitative Analysis</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>PHY 122</td>
      <td>Physics Laboratory</td>
      <td>1.5</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>4.5</td>
                            </tr>
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>20.5</td>
                            </tr>                    
                            
                            
    
  </tbody>
                    </table>
                    


</div>
<div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">First Year: Second Term</h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE 123</td>
        <td>Surveying</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>MATH 123</td>
      <td>Differential Equations and Statistics</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>PHY 133</td>
      <td>Physics II: Structure of Matter, Electricity and Magnetism and Modern Physics</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CHEM 133</td>
      <td>Chemistry II</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>EEE 131</td>
      <td>Basic Electrical Technology</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>HUM 115</td>
      <td>Sociology</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>HUM 117</td>
      <td>Government</td>
      <td>3.0</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>16.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE 134</td>
      <td>Practical Surveying</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>HUM 132</td>
      <td>Developing English Language Skills</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>CE 132</td>
      <td>Computer Aided Drawing</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>CE 140</td>
      <td>Architectural, Engineering and Planning Appreciation</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>SHOP 132</td>
      <td>1.5</td>
      <td>Workshop Sessional</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>7.5</td>
                            </tr>
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>21.5</td>
                            </tr>                    
                            
                            
    
  </tbody>
</table>



                    
                </div>
                <div className="col-md-6 col-sm-12">
                <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">Second Year: First Term</h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE 211</td>
        <td>Engineering Materials</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>MATH 227</td>
      <td>Laplace Transform and Vector Analysis</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CE 215</td>
      <td>Numerical Methods</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>ACT 211</td>
      <td>Accounting</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>HUM 227</td>
      <td>Engineering Economics</td>
      <td>3.0</td>
                            </tr>
                           
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>15.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE 214</td>
      <td>Computer Programming Sessional</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>CE 220</td>
      <td>Details of Construction</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>CE 222</td>
      <td>Materials Sessional</td>
      <td>1.5</td>
                            </tr>
                            <tr>
      <td>CE 238</td>
      <td>Quantity Surveying </td>
      <td>1.5</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>6.0</td>
                            </tr>
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>21.0</td>
                            </tr>                    
                            
                            
    
  </tbody>
</table>
                </div>
                <div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">Second Year: Second Term</h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE 217</td>
        <td>Environmental Engineering I</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>CE 233</td>
      <td>Engineering Geology and Geomorphology</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CE 237</td>
      <td>Applied Math for Engineers</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 223</td>
      <td>Mechanics of Solids II</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>WRE 231</td>
      <td>Fluid Mechanics</td>
      <td>3.0</td>
                            </tr>
                           
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>15.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>WRE 232</td>
      <td>Fluid Mechanics Sessional</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 232</td>
      <td>Structural Mechanics and Materials Sessional</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 226</td>
      <td>Engineering Computation Sessional</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 234</td>
      <td>Geotechnical Engineering Lab</td>
      <td>3.0</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>6.0</td>
                            </tr>
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>21.0</td>
                            </tr>                    
                            
                            
    
  </tbody>
                    </table>
                    




    </div>
        <div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">Third Year: First Term</h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE 311</td>
        <td>Structural Analysis and Design I</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>CE 313</td>
      <td>Principle of Soil Mechanics</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CE 315</td>
      <td>Design of Reinforced Concrete Structures I</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 321</td>
      <td>Professional Practice & Communication</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 323</td>
      <td>Environmental Engineering II</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>16.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE 326</td>
      <td>Reinforced Concrete Structure Design Sessional I</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 328</td>
      <td>Environmental Engineering Lab</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>MATH 111</td>
      <td>Differential and Integral Calculus, Matrices</td>
      <td>3.0</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>3.0</td>
                            </tr>
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>20.0</td>
                            </tr>                    
                            
                            
    
  </tbody>
                    </table>
                    






                </div>
                <div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">Third year: Second Term </h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE 317</td>
        <td>Structural Analysis and Design II</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>CE 325</td>
      <td>Design of Reinforced Concrete Structures II</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CE 331</td>
      <td>Transportation Engineering I: Transportation Planning and Traffic Engineering </td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 337</td>
      <td>Design of Steel Structures</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>WRE 331</td>
      <td>Open Channel Flow</td>
      <td>3.0</td>
                            </tr>
                          
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>16.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE 322</td>
      <td>Professional Practice and Communication Lab </td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 338</td>
      <td>Steel Structure Design Sessional</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>WRE 332</td>
      <td>Open Channel Flow Sessional</td>
      <td>3.0</td>
                            </tr>
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>4.5</td>
                            </tr>
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>20.5</td>
                            </tr>                    
                            
                            
    
  </tbody>
                    </table>
                    




                </div>
                <div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">Fourth Year: First Term</h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>CE  413</td>
        <td>Project Planning and Construction Management</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>CE  417</td>
      <td>Transportation Engineering II: Pavement Design and Railway Engineering</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CE  421</td>
      <td>Foundation Engineering</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE  423</td>
      <td>Socio Economic Aspects of Development Projects</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE  425</td>
      <td>Business and Career Development</td>
      <td>3.0</td>
                            </tr>
                           
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>13.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE  412</td>
      <td>Transportation Engineering Sessional I: High-way Materials and Traffic Engineering Design</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE  424</td>
      <td>Reinforced Concrete Structure Design Sessional II</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 402</td>
      <td>Industrial Training</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
        <td colspan="3.5" class="table-info">Final Year Capstone Project or Research</td> 
                                </tr>
                            <tr>
      <td>CE 400</td>
      <td>Project and Thesis </td>
      <td>3.0</td>
                            </tr>
    
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>5.5</td>
                            </tr>
                           
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>18.5</td>
                            </tr>                    
                            
                            
    
  </tbody>
                    </table>
                    



                </div>
                <div className="col-md-6 col-sm-12">
    <table class="table table-hover">
                        <thead>
                        <h5 className="text-left">Fourth Year: Second Term </h5>
                <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Title</th>
                <th scope="col">Credit Hour</th>
                </tr>
            </thead>
                
    <tbody>
        <tr>
        <td colspan="3.5" class="table-info">Theory</td> 
        </tr>
    <tr>
        <td>WRE 423</td>
        <td>Hydrology, Irrigation and Flood Management</td>
        <td>3.0</td>
    </tr>
    <tr>
      <td>CE 4_ _</td>
      <td>*Major 1</td>
      <td>3.0</td>
                            </tr>
                            
                            <tr>
      <td>CE 4_ _</td>
      <td>*Major 2</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 4_ _</td>
      <td>*Minor 1</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 4_ _</td>
      <td>*Minor 1</td>
      <td>3.0</td>
                            </tr>
                          
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>11.0</td>
                            </tr>
        <tr>
        <td colspan="3.5" class="table-info">Lab/Sessional</td> 
                            </tr>
                            <tr>
      <td>CE 4_ _</td>
      <td>**Major Sessional</td>
      <td>3.0</td>
                            </tr>
                            <tr>
      <td>CE 4_ _</td>
      <td>**Major Sessional</td>
      <td>3.0</td>
                            </tr>
      
                            
                            <tr>
        <td colspan="3.5" class="table-info">Final Year Capstone Project or Research</td> 
                                </tr>
                            <tr>
      <td>CE 400</td>
      <td>Project and Thesis </td>
      <td>3.0</td>
                            </tr>
    
                            <tr class="table-active">
      
      <td colspan="2">Sub Total</td>
      <td>6.0</td>
                            </tr>
                           
                            <tr class="table-info">
      
      <td colspan="2" >Total</td>
      <td>17.0</td>
                            </tr>      
                            <tr class="table-info">
      
      <td colspan="2" >Total credit hours:</td>
      <td>160.0</td>
                            </tr>  
                            
                            
    
  </tbody>
</table>
                </div>
                
</div>
</div>
        
    <Footers />
 </div>
    );
};

export default Undergraduate;