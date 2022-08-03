import React from 'react'
import './referrer.css'

function referrer() {
  return (
    <div className='tableWraper'>
        <div className='heading'>Referrer</div>

<table>
  <tr>
    <th className='stcolumn'>Location</th>
    <th>videos</th>
    <th>Sales</th>
    <th>Conversion</th>
    <th>Total</th>

  </tr>
  <tr>
    <td className='stcolumn'>google.com</td>
    <td>3476</td>
    <td>752</td>
    <td>43%</td>
    <td>$19,291</td>
 
  </tr>
  <tr>
    <td className='stcolumn'>facebook.com</td>
    <td>8126</td>
    <td>720</td>
    <td>32%</td>
    <td>$17,638</td>

  </tr>
  <tr>
    <td className='stcolumn'>twitter.com</td>
    <td>8836 </td>
    <td>694</td>
    <td>28% </td>
    <td>$16,218</td>

  </tr>
  <tr>
    <td className='stcolumn'>Direct,email Id </td>
    <td>1173 </td>
    <td>645</td>
    <td>24% </td>
    <td>$14,423</td>

  </tr>
  <tr>
    <td className='stcolumn'>linkedin.com</td>
    <td>2739</td>
    <td>539</td>
    <td>20%</td>
    <td>$12,370</td>

  </tr>
  <tr>
    <td className='stcolumn'>instagram.com</td>
    <td>2739</td>
    <td>539</td>
    <td>20%</td>
    <td>$12,370</td>

  </tr>
</table>
<div className='showmore'><span>Showmore</span></div>
    </div>
  )
}

export default referrer