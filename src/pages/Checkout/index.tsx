import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barCode from '../../assets/images/barcode 1.png'
import creditCard from '../../assets/images/credit-card 1.png'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [installments, setInstallments] = useState<Installment[]>([])
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      dlConfirmEmail: '',
      cardOwner: '',
      cpfCard: '',
      cardName: '',
      cardNumber: '',
      expiredMonth: '',
      expiredYear: '',
      cvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O CPF está incompleto')
        .max(14)
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('Email inválido')
        .required('O campo é obrigatório'),
      dlConfirmEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails são diferentes')
        .required('O campo é obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCard: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiredMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiredYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.cardOwner,
              document: values.cpfCard
            },
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiredMonth),
              year: Number(values.expiredYear)
            },
            code: Number(values.cvv)
          },
          installments: 1
        },
        products: []
      })
      console.log('erro')
    }
  })

  const checkInput = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isChanged && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstalllments = () => {
      const installmentsArray: Installment[] = []

      for (let i = 1; i < 7; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }

      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstalllments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado">
          <p>
            É com satisfação que informamos que recebemos seu pedido com
            sucesso! <br />
            Abaixo estão os detalhes da sua compra: <br />
            Número do pedido: {data.orderID} <br />
            Forma de pagamento:{' '}
            {payWithCard ? 'Cartão de crédito' : 'Boleto bancário'}
            <br /> <br />
            Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
            que a confirmação pode levar até 3 dias úteis. Após a aprovação do
            pagamento, enviaremos um e-mail contendo o código de ativação do
            jogo.
            <br /> <br />
            Se você optou pelo pagamento com cartão de crédito, a liberação do
            código de ativação ocorrerá após a aprovação da transação pela
            operadora do cartão. Você receberá o código no e-mail cadastrado em
            nossa loja.
            <br /> <br />
            Pedimos que verifique sua caixa de entrada e a pasta de spam para
            garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
            necessite de mais informações, por favor, entre em contato conosco
            através dos nossos canais de atendimento ao cliente.
            <br /> <br />
            Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
            jogo!
          </p>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.fullName}
                    className={checkInput('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.email}
                    className={checkInput('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cpf}
                    className={checkInput('cpf') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="mg-top">Dados de entrega - Conteúdo digital</h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.deliveryEmail}
                    className={checkInput('deliveryEmail') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="dlConfirmEmail">Confirme o E-mail</label>
                  <input
                    id="dlConfirmEmail"
                    type="email"
                    name="dlConfirmEmail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.dlConfirmEmail}
                    className={checkInput('dlConfirmEmail') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                type="button"
                onClick={() => setPayWithCard(false)}
              >
                <img src={barCode} alt="Boleto bancário" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                type="button"
                onClick={() => setPayWithCard(true)}
              >
                <img src={creditCard} alt="Cartão de crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="mg-top">
                {payWithCard ? (
                  <>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          id="cardOwner"
                          type="text"
                          name="cardOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardOwner}
                          className={checkInput('cardOwner') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCard">
                          CPF do titular do cartão
                        </label>
                        <input
                          id="cpfCard"
                          type="text"
                          name="cpfCard"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cpfCard}
                          className={checkInput('cpfCard') ? 'error' : ''}
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardName">Nome do cartão</label>
                        <input
                          id="cardName"
                          type="text"
                          name="cardName"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardName}
                          className={checkInput('cardName') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardNumber}
                          className={checkInput('cardNumber') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiredMonth">Mês de vencimento</label>
                        <input
                          id="expiredMonth"
                          type="number"
                          name="expiredMonth"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.expiredMonth}
                          className={checkInput('expiredMonth') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiredYear">Ano de vencimento</label>
                        <input
                          id="expiredYear"
                          type="number"
                          name="expiredYear"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.expiredYear}
                          className={checkInput('expiredYear') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          id="cvv"
                          type="number"
                          name="cvv"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cvv}
                          className={checkInput('cvv') ? 'error' : ''}
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamentos</label>
                        <select
                          id="installments"
                          name="installments"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.installments}
                          className={checkInput('installments') ? 'error' : ''}
                        >
                          {installments.map((installment) => (
                            <option key={installment.quantity}>
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
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
          <Button
            onClick={() => {
              form.handleSubmit()
              console.log('fui clicado')
            }}
            type="submit"
            title="Clique aqui para finalizar a compra"
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
