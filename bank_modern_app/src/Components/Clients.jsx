import React from 'react'
import { clients } from '../constants'
import styles, {layout} from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} ${layout.screenAdjust}    my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map((client)=>(
            <div key={client.id} className={`${styles.flexCenter}  sm:min-w-[192px] flex-1 min-w-[120px]`}>
              <img src={client.logo} alt="clientImg" className='sm:w-[192px] w-[100px] object-contain' />
              
            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Clients