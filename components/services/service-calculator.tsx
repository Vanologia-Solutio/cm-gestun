'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { motion } from 'framer-motion'
import { useState } from 'react'

const formatDecimal = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function ServiceCalculator() {
  const [amount, setAmount] = useState<string>('')
  const [rate, setRate] = useState<string>('2')

  const numAmount = parseFloat(amount.replace(/[^0-9]/g, '')) || 0
  const numRate = parseFloat(rate)

  let calculatedFee = (numAmount * numRate) / 100

  // Minimum fee logic: 25,000 if transaction < 1,000,000
  if (numAmount > 0 && numAmount < 1000000) {
    calculatedFee = Math.max(calculatedFee, 25000)
  }

  const fee = calculatedFee
  const receive = Math.max(0, numAmount - calculatedFee)

  return (
    <section id='calculator'>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Kalkulator Biaya</CardTitle>
              <CardDescription>
                Estimasi jumlah yang Anda terima setelah biaya layanan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FieldGroup className='gap-8'>
                <Field>
                  <FieldLabel htmlFor='gesek-amount'>Gesek</FieldLabel>
                  <FieldContent>
                    <InputGroup>
                      <InputGroupAddon align='inline-start'>
                        <InputGroupText className='text-primary'>
                          Rp
                        </InputGroupText>
                      </InputGroupAddon>
                      <InputGroupInput
                        id='gesek-amount'
                        type='text'
                        inputMode='numeric'
                        placeholder='Contoh: 1.000.000'
                        value={amount}
                        onChange={e => {
                          const val = e.target.value.replace(/[^0-9]/g, '')
                          setAmount(val ? formatDecimal(parseInt(val)) : '')
                        }}
                      />
                    </InputGroup>
                  </FieldContent>
                </Field>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <Field>
                    <FieldLabel>Fee / Rate</FieldLabel>
                    <FieldContent>
                      <Select value={rate} onValueChange={setRate}>
                        <SelectTrigger className='w-full'>
                          <SelectValue placeholder='Pilih Rate' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                          <SelectItem value='2'>2%</SelectItem>
                          <SelectItem value='2.5'>2.5%</SelectItem>
                          <SelectItem value='3'>3%</SelectItem>
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Biaya Layanan</FieldLabel>
                    <FieldContent>
                      <InputGroup className='bg-muted/50'>
                        <InputGroupAddon align='inline-start'>
                          <InputGroupText>Rp</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput
                          readOnly
                          value={formatDecimal(fee)}
                          className='text-muted-foreground font-medium'
                        />
                      </InputGroup>
                    </FieldContent>
                  </Field>
                </div>

                <Field>
                  <FieldLabel className='text-lg text-primary'>
                    Total Terima
                  </FieldLabel>
                  <FieldContent>
                    <p className='text-xl font-bold text-primary'>
                      {formatCurrency(receive)}
                    </p>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter>
              <em className='text-sm text-muted-foreground'>
                *Transaksi di bawah Rp 1.000.000 dikenakan biaya minimal Rp
                25.000
              </em>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
