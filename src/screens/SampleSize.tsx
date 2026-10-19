import { useEffect, useId, useState } from 'react'
import { motion, useSpring, useTransform } from 'motion/react'
import { usePrefs } from '../lib/prefs'
import { whatsappUrl } from '../lib/contact'
import { sampleSizeProportion, zFor } from '../lib/stats'
import { ScreenHeader } from '../components/Chrome'
import { WhatsAppIcon } from '../components/Brand'

type Conf = 90 | 95 | 99

function CountUp({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 140, damping: 22 })
  const text = useTransform(spring, (v) => Math.round(v).toLocaleString('fr-FR'))
  useEffect(() => spring.set(value), [spring, value])
  return <motion.span>{text}</motion.span>
}

function Slider(props: { label: string; help: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  const id = useId()
  const pct = ((props.value - props.min) / (props.max - props.min)) * 100
  return (
    <div className="slider-field">
      <div className="slider-head">
        <label htmlFor={id}>{props.label}</label>
        <output htmlFor={id}>{props.value} %</output>
      </div>
      <input
        id={id}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        style={{ ['--fill' as string]: `${pct}%` }}
        onChange={(e) => props.onChange(Number(e.target.value))}
        aria-describedby={`${id}-help`}
      />
      <p id={`${id}-help`} className="hint">
        {props.help}
      </p>
    </div>
  )
}

export function SampleSize() {
  const { t } = usePrefs()
  const s = t.tools.sample
  const [p, setP] = useState(30)
  const [e, setE] = useState(5)
  const [conf, setConf] = useState<Conf>(95)
  const [pop, setPop] = useState('')
  const popId = useId()

  const population = Number(pop.replace(/\s/g, '')) || undefined
  const n = sampleSizeProportion(p / 100, e / 100, conf, population)
  const z = zFor(conf)

  return (
    <div className="tool">
      <ScreenHeader title={s.title} back="home" />
      <div className="page page-narrow">
        <p className="section-lede">{s.intro}</p>

        <section className="n-card" aria-live="polite">
          <p className="n-value">
            <CountUp value={n} />
          </p>
          <p className="n-label">{s.result}</p>
          <p className="n-plus">{s.plus}</p>
          <p className="n-formula">
            <span>{s.formula}</span>
            n = {z}² × {(p / 100).toFixed(2)} × {(1 - p / 100).toFixed(2)} / {(e / 100).toFixed(3)}²
            {population ? ' · FPC' : ''}
          </p>
        </section>

        <div className="tool-steps">
          <Slider label={s.p} help={s.pHelp} value={p} min={1} max={99} step={1} onChange={setP} />
          <Slider label={s.e} help={s.eHelp} value={e} min={1} max={15} step={0.5} onChange={setE} />

          <fieldset className="seg-field">
            <legend>{s.conf}</legend>
            <div className="seg-options seg-inline">
              {([90, 95, 99] as Conf[]).map((c) => (
                <label key={c} className="seg-option">
                  <input type="radio" name="conf" checked={conf === c} onChange={() => setConf(c)} />
                  <span>{c} %</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field" htmlFor={popId}>
            <span className="field-label">{s.pop}</span>
            <input id={popId} type="text" inputMode="numeric" placeholder={s.popPh} value={pop} onChange={(ev) => setPop(ev.target.value.replace(/[^\d\s]/g, ''))} />
            <span className="hint">{s.popHelp}</span>
          </label>
        </div>

        <a
          className="btn btn-primary btn-lg btn-block"
          href={whatsappUrl(`${s.waPrefix} ${n} ${s.waSuffix} (p = ${p} %, e = ${e} %, ${conf} %${population ? `, N = ${population}` : ''})`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={22} />
          {s.cta}
        </a>
      </div>
    </div>
  )
}
