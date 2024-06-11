import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// Components
import Button from '../../components/Button'
import Card from '../../components/Card'
// Images
import barCode from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/cartao.png'
// Styles
import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cardDisplayName: '',
      cpfCardOwner: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ser pelo menos 5 caracter')
        .required('O campo é obrigatorio'),
      email: Yup.string()
        .email('E-mail invalido')
        .required('O campo é obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatorio'),
      deliveryEmail: Yup.string()
        .email('E-mail invalido')
        .required('O campo é obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatorio'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors
    if (isTouched && isInvalid) {
      return message
    }
    return ''
  }
  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedida com
              sucesso!
              <br />
              Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="marginTop">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo a código de ativação do
              jogo.
            </p>
            <p className="marginTop">
              Se você optou pela pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá a código no e mail cadastrado
              em nossa loja. Pedimos que verifique sua caixa de entrada e a
              pasta de spam para garantir que receba nossa comunicação.
            </p>
            <p className="marginTop">
              Caso tenha alguma dúvida ou necessite de mais informações, por
              favor, entre em contato conosco através dos nossos canais de
              atendimento ao cliente. Agradecemos por escolher a [Nome da Loja)
              e esperamos que desfrute do seu jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <small>
                    {getErrorMessage('fullName', formik.errors.fullName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <small>{getErrorMessage('email', formik.errors.email)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <small>{getErrorMessage('cpf', formik.errors.cpf)}</small>
                </S.InputGroup>
              </S.Row>
              <h3 className="marginTop">
                Dados de entrega - Conteúdos digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={formik.values.deliveryEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'deliveryEmail',
                      formik.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmdeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmdeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={formik.values.confirmDeliveryEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'confirmDeliveryEmail',
                      formik.errors.confirmDeliveryEmail
                    )}
                  </small>
                </S.InputGroup>
              </S.Row>
            </>
          </Card>

          <Card title="Pagamento">
            <>
              <S.TabButton
                type="button"
                $isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
              >
                <img src={barCode} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                type="button"
                $isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={creditCard} alt="Cartão" />
                Cartão de credito
              </S.TabButton>
              <div className="marginTop">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={formik.values.cardOwner}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardOwner',
                            formik.errors.cardOwner
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={formik.values.cpfCardOwner}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cpfCardOwner',
                            formik.errors.cpfCardOwner
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome do cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={formik.values.cardDisplayName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardDisplayName',
                            formik.errors.cardDisplayName
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formik.values.cardNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            formik.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <input
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={formik.values.expiresMonth}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'expiresMonth',
                            formik.errors.expiresMonth
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="123px">
                        <label htmlFor="expiresYear">Ano do vencimento</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={formik.values.expiresYear}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'expiresYear',
                            formik.errors.expiresYear
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={formik.values.cardCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage('cardCode', formik.errors.cardCode)}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop="24px">
                      <S.InputGroup $maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={formik.values.installments}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <small>
                            {getErrorMessage(
                              'installments',
                              formik.errors.installments
                            )}
                          </small>
                          <option>1x de R$ 200, 00</option>
                          <option>2x de R$ 200, 00</option>
                          <option>3x de R$ 200, 00</option>
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button type="submit" title="Clique aqui para finalizar a compra">
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}
export default Checkout
