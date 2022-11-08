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
import localeIcon from '../../../../../../assets/localeFormIcon.svg'

export function LocaleForm() {
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
        />

        <InputAddres
          type="text"
          name="address"
          id="address"
          placeholder="Rua"
        />

        <div>
          <InputNumber
            type="text"
            name="number"
            id="number"
            placeholder="Número"
          />

          <InputAditionalAddress
            type="text"
            name="aditionalAddress"
            id="aditionalAddress"
            placeholder="Complemento"
          />
        </div>

        <div>
          <InputNeighborhood
            type="text"
            name="neighborhood"
            id="neighborhood"
            placeholder="Bairro"
          />

          <InputCity type="text" name="city" id="city" placeholder="Cidade" />

          <InputState type="text" name="state" id="state" placeholder="UF" />
        </div>
      </div>
    </Form>
  )
}
