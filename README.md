# I Am Musk

A money simulator that puts extreme wealth in real time. Pick a billionaire or an
everyday earner, and watch the dollars pile up second by second from the moment the page
loads. Live at [iammusk.com](https://iammusk.com).

The idea is simple and a little uncomfortable: in the few seconds it takes to read this
sentence, Elon Musk has accrued more than most Americans earn in a month. I Am Musk makes
that gap impossible to ignore by letting you stand in anyone's shoes and feel the money move.

## How the numbers work

For billionaires, the counter uses their **total net worth divided by their working life**,
counting every year since they turned 18. It answers a simple question: across an entire
career, how many dollars has this fortune piled up per second? Using a lifetime average keeps
the number steady and conservative, so it reflects how someone actually got rich rather than
any single lucky year.

For everyday earners, the counter uses **annual income**, because a typical worker holds
little appreciating wealth, so their paycheck *is* their accrual rate. Both sides measure
the same thing: dollars accruing per second of a working life.

## The numbers

Net worths from the Bloomberg Billionaires Index (June 15, 2026), except Taylor Swift, who is
below the index's cutoff and uses a Forbes (2026) figure. Working life is counted in seconds
as `(age - 18) x 31,536,000`; income per second is `annual income / 31,536,000`.

| Who | Basis | Per second |
| --- | --- | --- |
| Elon Musk | $1.27T net worth / 36 working yrs | **$1,118.65** |
| Mark Zuckerberg | $229B net worth / 24 working yrs | **$302.56** |
| Jeff Bezos | $267B net worth / 44 working yrs | **$192.42** |
| Taylor Swift | $2B net worth / 18 working yrs | **$3.52** |
| Top 0.1% income earner | $3,312,693 / yr | **$0.105** |
| Top 1% income earner | $800,000 / yr | **$0.025** |
| Average American | $66,622 / yr | **$0.0021** |
| Minimum-wage worker | $15,080 / yr * | **$0.00048** |

\* Full-time at the federal minimum wage of $7.25/hr, unchanged since 2009.

Even on this conservative, lifetime-average basis, Musk accrues roughly **530,000x** faster
than the average American worker. All values live in [`js/money.js`](js/money.js) if you'd
like to tweak them.

## Sources

- Billionaire wealth: [Bloomberg Billionaires Index](https://www.bloomberg.com/billionaires/)
- Taylor Swift net worth: [Forbes](https://www.forbes.com/profile/)
- Top 0.1% / 1% income: [Investopedia](https://www.investopedia.com/personal-finance/how-much-income-puts-you-top-1-5-10/)
- Average U.S. salary: [SoFi](https://www.sofi.com/learn/content/average-salary-in-us/)
- Minimum wage: [UC Davis Center for Poverty Research](https://poverty.ucdavis.edu/faq/what-are-annual-earnings-full-time-minimum-wage-worker)
