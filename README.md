# I Am Musk 💸

**A money simulator that puts extreme wealth in real time.** Pick a billionaire — or
an everyday earner — and watch the dollars pile up, second by second, from the moment
the page loads. Live at **[iammusk.com](https://iammusk.com)**.

The idea is simple and a little uncomfortable: by the time you've read this sentence,
Elon Musk's net worth has grown more than most people earn in a month. *I Am Musk* makes
that gap impossible to ignore by letting you stand in anyone's shoes and feel the money
move.

## How it works

Choose a name from the dropdown and a counter starts ticking up at that person's real
rate of wealth accumulation. Every figure is a per-second number derived from public data:

```
per-second rate = yearly figure ÷ 31,536,000   (seconds in a year)
```

The reset button (top-right) sets you back to $0 so you can start a fresh stopwatch.

### A note on the comparison

For billionaires the counter tracks **net worth** — the total value of their assets, which
is dominated by ownership stakes and investments rather than a paycheck. For everyday
earners it tracks **income**, the salary and wages they actually take home. Mixing the two
measures is deliberate: it's the honest way to compare two groups whose money works in
completely different ways.

## The numbers

Figures refreshed **June 16, 2026**.

| Who | Per year | Per second |
| --- | --- | --- |
| Elon Musk | $654,000,000,000 | **$20,738.46** |
| Mark Zuckerberg | $21,600,000,000 | **$684.93** |
| Jeff Bezos | $14,000,000,000 | **$443.94** |
| Bill Gates | $10,000,000,000 * | **$317.10** |
| Top 0.1% income earner | $3,312,693 | $0.105 |
| Top 1% income earner | $800,000 | $0.025 |
| Average American | $66,622 | $0.0021 |
| Minimum-wage worker | $15,080 † | $0.00048 |

\* Estimate — 2026 sources for Gates' year-to-date change were incomplete.
† Full-time at the **federal minimum wage of $7.25/hr — unchanged since 2009.**

For billionaires the per-year value is the year-to-date change in net worth (from the
[Bloomberg Billionaires Index](https://www.bloomberg.com/billionaires/)); for everyday
earners it's annual income. All values live in [`js/money.js`](js/money.js) if you'd like
to tweak them.

> **On Musk's number:** 2026 sources diverge wildly on his net worth thanks to the
> SpaceX-IPO "first trillionaire" narrative. The figure here reflects the high-end
> Bloomberg snapshot — adjust to taste.

## Sources

- **Billionaire wealth** — [Bloomberg Billionaires Index](https://www.bloomberg.com/billionaires/)
- **Top 0.1% / 1% income** — [Investopedia](https://www.investopedia.com/personal-finance/how-much-income-puts-you-top-1-5-10/)
- **Average U.S. salary** — [SoFi](https://www.sofi.com/learn/content/average-salary-in-us/)
- **Minimum wage** — [UC Davis Center for Poverty Research](https://poverty.ucdavis.edu/faq/what-are-annual-earnings-full-time-minimum-wage-worker)
- **Falling bills** — public-domain U.S. currency scans from Wikimedia Commons

## Run it locally

It's a static site — no build step, no dependencies.

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Tech

Plain HTML, CSS, and vanilla JavaScript. No frameworks.

---

Built by [Stephen Thouvenot](https://twitter.com/ToovyCodes). If it made you think,
[buy me a coffee](https://www.buymeacoffee.com/sthouvenot). ☕
