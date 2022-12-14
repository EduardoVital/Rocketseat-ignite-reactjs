import {
  Form,
  InputAddres,
  InputAditionalAddress,
  InputCity,
  InputNeighborhood,
  InputNumber,
  InputZipCode,
  InputState,
} from './styles'
import localeIcon from '../../../../../assets/localeFormIcon.svg'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../../contexts/CoffeesContext'

export function LocaleForm() {
  const { formInfo, setForm } = useContext(CoffeesContext)

  const handleChange = (event: any) => {
    setForm({ ...formInfo, [event.target.name]: event.target.value })
  }

  return (
    <Form>
      <div className="title-form">
        <img src={localeIcon} alt="" />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>

      <div className="fields-form">
        <InputZipCode
          type="text"
          name="zipCode"
          id="zipCode"
          placeholder="CEP"
          value={formInfo.zipCode}
          onChange={handleChange}
        />

        <InputAddres
          type="text"
          name="address"
          id="address"
          placeholder="Rua"
          value={formInfo.address}
          onChange={handleChange}
        />

        <div>
          <InputNumber
            type="text"
            name="number"
            id="number"
            placeholder="Número"
            value={formInfo.number}
            onChange={handleChange}
          />

          <InputAditionalAddress
            type="text"
            name="aditionalAddress"
            id="aditionalAddress"
            placeholder="Complemento"
            value={formInfo.aditionalAddress}
            onChange={handleChange}
          />
        </div>

        <div>
          <InputNeighborhood
            type="text"
            name="neighborhood"
            id="neighborhood"
            placeholder="Bairro"
            value={formInfo.neighborhood}
            onChange={handleChange}
          />

          <InputCity
            type="text"
            name="city"
            id="city"
            placeholder="Cidade"
            value={formInfo.city}
            onChange={handleChange}
          />

          <InputState
            type="text"
            name="state"
            id="state"
            placeholder="UF"
            value={formInfo.state}
            onChange={handleChange}
          />
        </div>
      </div>
    </Form>
  )
}
